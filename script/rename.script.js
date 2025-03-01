import { readdir, rename } from 'node:fs/promises'
import { join }            from 'node:path'

async function recursiveRenameFile(source, predicate, project) {
  const dirents = await readdir(source, { withFileTypes: true })
  for (const dirent of dirents) {
    const filename = dirent.name, rawPath = join(source, filename)
    if (dirent.isDirectory()) {
      return await recursiveRenameFile(rawPath, predicate, project)
    }
    if (predicate(filename)) {
      const newPath = join(source, project(filename))
      await rename(rawPath, newPath)
      console.log(`Renamed: ${rawPath} -> ${newPath}`)
    }
  }
}

await recursiveRenameFile(
  './packages',
  name => name.endsWith('.unit.js'),
  name => name.replace('.unit.js', '.test.js')
).catch(console.error)