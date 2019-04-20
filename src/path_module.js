const path = require('path')

/**
 * Some of the useful node path module
 * functions
 * 
 * @see https://nodejs.org/docs/latest-v8.x/api/path.html
 */
class PathModule {
    
    /**
     * Run all of the helpers at once
     */
    runAll() {
        console.log(`The delimiter is ${this.pathDelimiter()}`)
        console.log(`The current dir is ${this.currentDir()}`)
        console.log(`The base dir name is ${this.baseName(__dirname)}`)
        return "\n\nDone"
    }

    /**
     * Get the current directory note that
     * __dirname is from the wrapping module function that node provides
     * 
     * @returns {String} dirname
     */
    currentDir(){
        return __dirname
    }

    /**
     * Gets the systems path delimiter
     * 
     * @return {String} path delimiter
     */
    pathDelimiter(){
        return path.delimiter
    }

    /**
     * Get the base directory name of a path
     * @param {String path} the_path 
     */
    baseName(the_path){
        return path.basename(the_path)
    }
}

module.exports = PathModule