import fs   from 'fs/promises'
import path from 'path'

class DependencyLister {
  constructor(rootDir) {
    this.rootDir = rootDir
    this.dependenciesSet = new Set()
  }

  async findJsFiles(dir, fileList = [], ignoreDirs = [ 'node_modules', 'dist', 'test', 'archive' ]) {
    const files = await fs.readdir(dir, { withFileTypes: true })

    for (const file of files) {
      const filePath = path.join(dir, file.name)

      if (file.isDirectory()) {
        if (!ignoreDirs.includes(file.name)) {
          console.log('checking:', file.name)
          await this.findJsFiles(filePath, fileList, ignoreDirs)
        }
      } else if (file.name.endsWith('.js')) {
        fileList.push(filePath)
      }
    }

    return fileList
  }

  async listDependencies(filePath) {
    try {
      console.log('checking:', filePath)
      const content = await fs.readFile(filePath, 'utf-8')
      const importRegex = /import\s+.*?from\s+['"](.*?)['"]/g
      let match

      while (match = importRegex.exec(content)) {
        this.dependenciesSet.add(match[1])
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error)
    }
  }

  async run() {
    try {
      const jsFiles = await this.findJsFiles(this.rootDir)

      for (const file of jsFiles) {
        await this.listDependencies(file)
      }

      console.log('Distinct Dependencies:')
      this.dependenciesSet.forEach(dep => {if (!dep.startsWith('.')) console.log(dep)})

      console.log('Finished listing distinct dependencies')
    } catch (error) {
      console.error('Error:', error)
    }
  }
}

const rootDir = process.cwd()
const dependencyLister = new DependencyLister(rootDir)
await dependencyLister.run()