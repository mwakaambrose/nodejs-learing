console.log("Source entry point:\n\n")

const PathModule = require('./src/path_module')
const OperatingSystem = require('./src/os_module')

console.log(new PathModule().runAll())
console.log(new OperatingSystem().runAll())