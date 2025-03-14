import { readFile, writeFile, readdir }              from 'fs/promises'
import { join, extname, dirname, relative, resolve } from 'path'

/**
 * Adds '.js' extension to import paths where missing.
 * @param {string} code - The content of the JavaScript file.
 * @param {string} filePath - The absolute path of the JavaScript file.
 * @returns {string} - The modified code with added '.js' extensions.
 */
const addJsExtensionToImports = (code, filePath) => {
  return code.replace(
    /(import\s+{[^}]+}\s+from\s+['"])([^'"]+)(['"])/g,
    (match, prefix, importPath, suffix) => {
      if (
        importPath.startsWith('.') &&
        !importPath.endsWith('.js') &&
        !importPath.endsWith('.json') &&
        !importPath.endsWith('/') //exclude directory
      ) {
        const absolutePath = resolve(dirname(filePath), importPath)
        const extension = extname(absolutePath)
        if (!extension) {
          return `${prefix}${importPath}.js${suffix}`
        }

      }
      return match
    }
  )
}

/**
 * Recursively finds all JavaScript files within a directory.
 * @param {string} dir - The directory to search.
 * @param {string[]} [fileList=[]] - Accumulator for the file cast.
 * @param {string[]} [ignoreDirs=['node_modules', 'dist']] - Directories to ignore.
 * @returns {Promise<string[]>} - A promise that resolves to an array of file paths.
 */
async function findJsFiles(dir, fileList = [], ignoreDirs = [ 'node_modules', 'dist' ]) {
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

/**
 * Processes a single JavaScript file, adding missing '.js' extensions.
 * @param {string} filePath - The path to the file.
 */
const processFile = async (filePath) => {
  try {
    const content = await readFile(filePath, 'utf-8')
    const transformed = addJsExtensionToImports(content, filePath)
    if (content !== transformed) {
      await writeFile(filePath, transformed, 'utf-8')
      console.log(`Modified: ${filePath}`)
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
}

/**
 * Main function to run the script.
 * @param {string} [rootDir=process.cwd()] - The root directory to start the search.
 */
const main = async (rootDir = process.cwd()) => {
  const jsFiles = await findJsFiles(rootDir)
  await Promise.all(jsFiles.map(processFile))
}

// Run the script
main().catch(console.error)