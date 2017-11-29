/*
    Loads config file, pointed by the -config flag
*/
declare const global 
let config
let inTest = !!process.argv
    .map(x => x.includes("jest"))
    .find(x => x)

try {
    if (!inTest) {
        config = require("../../config/server.json")
    } 
    if (inTest) {
        config = require("../../config/server.test.json")
    }
} catch (err) {
    console.log(`Error loading config file\n\nPlease ensure you have a /config/server.json\n\nYou may need to copy server.json.default as a starting template`)
    process.exit(1) 
}

export { config, inTest }