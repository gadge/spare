import fs   from 'fs/promises'
import path from 'path'

// const rootDir = 'c:\\Users\\hoyeu\\Dev\\baremo\\spare'
const testImportLine = 'import { test } from \'node:test\''

async function findJsFiles(dir, fileList = [], ignoreDirs = [ 'node_modules', 'dist', 'src', 'util', 'resources', 'assets' ]) {
  const files = await fs.readdir(dir, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dir, file.name)

    if (file.isDirectory()) {
      if (!ignoreDirs.includes(file.name)) {
        await findJsFiles(filePath, fileList, ignoreDirs)
      }
    } else if (file.name.endsWith('.test.js') || file.name.endsWith('.strategies.js')) {
      fileList.push(filePath)
    }
  }

  return fileList
}

async function addTestImportIfMissing(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8')

    // Check if the file already has the test import
    if (content.includes('import { test } from \'node:test\'')) {
      console.log(`${filePath}: Already has test import`)
      return
    }

    // Add the import at the top of the file or after other imports
    let newContent
    const importRegex = /^import .+$/m
    const lastImportMatch = [ ...content.matchAll(/^import .+$/gm) ].pop()

    if (lastImportMatch) {
      // Add after the last import
      const lastImportIndex = lastImportMatch.index + lastImportMatch[0].length
      newContent = content.slice(0, lastImportIndex) +
        '\n' + testImportLine +
        content.slice(lastImportIndex)
    } else {
      // Add at the beginning of the file
      newContent = testImportLine + '\n' + content
    }

    await fs.writeFile(filePath, newContent, 'utf-8')
    console.log(`${filePath}: Added test import`)
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
}

async function main() {
  try {
    const jsFiles = await findJsFiles(process.cwd())
    console.log(`Found ${jsFiles.length} JavaScript files`)

    for (const file of jsFiles) {
      await addTestImportIfMissing(file)
    }

    console.log('Finished processing all files')
  } catch (error) {
    console.error('Error:', error)
  }
}

main()