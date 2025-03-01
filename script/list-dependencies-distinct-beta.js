import { indexedOf }         from '@vect/object-mapper'
import { union }             from '@vect/vector-algebra'
import { readdir, readFile } from 'node:fs/promises'
import { join }              from 'node:path'

const CONFIGS = {
  release: {
    key: 'dependencies',
    ignore: [ 'node_modules', 'dist', 'test', 'archive' ]
  },
  develop: {
    key: 'devDependencies',
    ignore: [ 'node_modules', 'dist', 'src', 'archive' ]
  }
}

const getScope = (name) => name.slice(0, name.indexOf('/'))

class Finder {
  constructor(ext) {
    this.files = []
    this.ext = ext
  }
  static find(source, ext, ignores) {
    return (new Finder(ext)).findCodeFiles(source, ignores)
  }
  async findCodeFiles(source, ignores) {
    const files = this.files ?? [], ext = this.ext ?? '.js'
    const dirents = await readdir(source, { withFileTypes: true })
    for (const dirent of dirents) {
      const filePath = join(source, dirent.name)
      if (dirent.isDirectory() && !ignores.includes(dirent.name)) {
        await this.findCodeFiles(filePath, ignores)
      } else if (dirent.isFile() && dirent.name.endsWith(ext)) {
        files.push(filePath)
      }
    }
    return files
  }
}

async function asyncReduce(fold, init) {
  const vec = this, hi = vec.length
  if (hi === 0) return Promise.resolve(init)
  for (let i = 0; i < vec.length; i++)
    init = await fold(init, vec[i], i)
  return init
}


async function traverseDependencies(filePath) {
  const dependencies = []
  try {
    const content = await readFile(filePath, 'utf-8')
    const regexp = /import\s+.*?from\s+['"](.*?)['"]/g
    let match, name
    while ((match = regexp.exec(content)) && (name = match[1])) {
      if (name.startsWith('.') || name.startsWith('node:')) continue
      if (name.startsWith('@')) {
        const [ scope, project ] = name.split('/')
        dependencies.push(`${scope}/${project}`)
      } else {
        dependencies.push(name.split('/')[0])
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
  return dependencies
}

class DependencyLister {
  constructor() {
    this.orgVersions = {}
    this.projVersions = {}
    this.testVersions = {}
  }

  projVersion(dep) {
    return this.projVersions[dep] ?? this.orgVersions[getScope(dep)] ?? ''
  }

  testVersion(dep) {
    return this.testVersions[dep] ?? this.orgVersions[getScope(dep)] ?? ''
  }

  async loadPackage(dir) {
    try {
      const packagePath = join(dir, 'package.json')
      const packageConfig = JSON.parse(await readFile(packagePath, 'utf-8'))
      for (const [ project, version ] of indexedOf(packageConfig.dependencies ?? {})) {
        this.projVersions[project] = version
        this.orgVersions[getScope(project)] = version
      }
      for (const [ project, version ] of indexedOf(packageConfig.devDependencies ?? {})) {
        this.testVersions[project] = version
        this.orgVersions[getScope(project)] = version
      }
    } catch (error) {
      console.error(`Error loading package.json in ${dir}:`, error)
    }
  }

  async run(rootDir) {
    try {
      await this.loadPackage(rootDir)
      const projFiles = (await Finder.find(rootDir, '.js', CONFIGS.release.ignore))
      const testFiles = (await Finder.find(rootDir, '.js', CONFIGS.develop.ignore))

      const projDependencies = (await asyncReduce.call(
        projFiles,
        async (prev, path) => union(prev, await traverseDependencies(path)),
        []
      )).sort()
      const testDependencies = (await asyncReduce.call(
        testFiles,
        async (prev, path) => union(prev, await traverseDependencies(path)),
        []
      )).sort()

      console.log('Dependencies and versions:')
      for (const dep of projDependencies) {
        console.log(`"${dep}": "${this.projVersion(dep)}",`)
      }

      console.log('\nDevDependencies and versions:')
      for (const dep of testDependencies) {
        console.log(`"${dep}": "${this.testVersion(dep)}",`)
      }

      console.log('\nMissing dependencies (used but not in package.json):')
      for (const dep of projDependencies) {
        if (!(dep in this.projVersions)) {
          console.log(`"${dep}": "${this.projVersion(dep)}",`)
        }
      }

      console.log('\nMissing devDependencies (used but not in package.json):')
      for (const dep of testDependencies) {
        if (!(dep in this.projVersions)) {
          console.log(`"${dep}": "${this.testVersion(dep)}",`)
        }
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
}

const rootDir = process.cwd()
const dependencyLister = new DependencyLister(rootDir)
await dependencyLister.run(rootDir)