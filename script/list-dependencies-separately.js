import fs   from 'fs/promises'
import path from 'path'

// const rootDir = 'c:\\Users\\hoyeu\\Dev\\baremo\\spare'

async function findJsFiles(dir, fileList = [], ignoreDirs = [ 'node_modules', 'dist' ]) {
  const files = await fs.readdir(dir, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dir, file.name)

    if (file.isDirectory()) {
      if (!ignoreDirs.includes(file.name)) {
        await findJsFiles(filePath, fileList, ignoreDirs)
      }
    } else if (file.name.endsWith('.js')) {
      fileList.push(filePath)
    }
  }

  return fileList
}

async function listDependenciesSeparately(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    const importRegex = /import\s+.*?from\s+['"](.*?)['"]/g
    const dependencies = []
    let match

    while ((match = importRegex.exec(content)) !== null) {
      dependencies.push(match[1])
    }

    if (dependencies.length > 0) {
      console.log(`Dependencies in ${filePath}:`)
      dependencies.forEach(dep => console.log(`  - ${dep}`))
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
}

async function listDependenciesSeparately(rootDir = process.cwd()) {
  try {
    const jsFiles = await findJsFiles(rootDir)
    console.log(`Found ${jsFiles.length} JavaScript files`)

    for (const file of jsFiles) {
      await listDependenciesSeparately(file)
    }

    console.log('Finished listing dependencies')
  } catch (error) {
    console.error('Error:', error)
  }
}

await listDependenciesSeparately()