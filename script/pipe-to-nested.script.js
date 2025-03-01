import { readFile, writeFile, readdir } from 'fs/promises'
import { join, relative } from 'path'

const transformPipeToNested = (code) => {
  return code.replace(/(\S+)\s*\|>\s*(\S+)/g, (_, left, right) => {
    if (right.includes('(')) {
      // If right side is a function call, wrap the left side as first argument
      const [funcName, rest] = right.split(/\((.+)/)
      return `${funcName}(${left}${rest ? ', ' + rest : ')'}`
    }
    // If right side is just a reference, call it with left side
    return `${right}(${left})`
  })
}

// Recursive function to find all JS files
async function findJsFiles(dir, fileList = [], ignoreDirs = ['node_modules', 'dist']) {
  const files = await readdir(dir, { withFileTypes: true })

  for (const file of files) {
    const path = join(dir, file.name)

    if (file.isDirectory()) {
      if (!ignoreDirs.includes(file.name)) {
        await findJsFiles(path, fileList, ignoreDirs)
      }
    } else if (file.name.endsWith('.js')) {
      fileList.push(path)
    }
  }

  return fileList
}

const processFile = async (filePath) => {
  try {
    const content = await readFile(filePath, 'utf-8')
    const transformed = transformPipeToNested(content)
    if (content !== transformed) {
      await writeFile(filePath, transformed, 'utf-8')
      console.log(`Transformed: ${filePath}`)
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
}

const main = async () => {
  const rootDir = process.cwd()
  const jsFiles = await findJsFiles(rootDir)

  await Promise.all(jsFiles.map(processFile))
}

main().catch(console.error)