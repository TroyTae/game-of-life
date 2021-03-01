/**
 * Script used to consolodate life 
 * directory files into one json file
 */
const fs = require('fs')
const path = require('path')

// Filepath of life.json files
const LIFE_DIRECTORY = path.resolve(__dirname, '..', 'life')

/**
 * Recursively walk directory and look for files. Do something 
 * with each of them.
 * 
 * @param {string} dir directory to check
 * @param {Function<string>} callback called on every file found
 */
function walk(dir, callback) {
    let subpaths = fs.readdirSync(dir)
    for (const subpath of subpaths) {
        let fullsubpath = path.resolve(dir, subpath)
        let stat = fs.statSync(fullsubpath)
        if (stat.isDirectory()) {
            walk(fullsubpath, callback)
        }
        else {
            callback(fullsubpath)
        }
    }
}

/**
 * Transform a folder name with dashes into
 * a proper name with capitalized words and
 * spaces
 * 
 * @param {string} name name of path folder
 */
let transform = name =>
    name.split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')

// Read all json files in life folder and append them to this json document
let json = []
walk(LIFE_DIRECTORY, fpath => {
    // Construct "category" and "subcategory" entries
    // from folder/subfolder of the file.
    // also, for convenience, add urlname parameter
    let relpath = path.relative(LIFE_DIRECTORY, fpath)
    let parts = relpath.split(path.sep)
    let category = parts[0]
    let subcategory = parts.length > 2 ? parts[1] : null
    let urlname = parts[parts.length > 2 ? 2 : 1]
    urlname = path.basename(urlname, '.json')

    // Read data, add extra entries, and append to json array
    let data = fs.readFileSync(fpath)
    data = JSON.parse(data)
    data.category = category
    data.subcategory = subcategory
    data.urlname = urlname
    json.push(data)
})

// Write the json into life.json
fs.writeFileSync('./src/life.json', JSON.stringify(json))