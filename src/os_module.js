const os = require('os')

/**
 * Demonstrate the operating system module
 * 
 * @see https://nodejs.org/docs/latest-v8.x/api/os.html
 */
class OperatingSystem {
    runAll(){
        console.log(`The Systems Architecture is ${this.architecture()}`)
        console.log(`The Systems has ${this.numberOfCpus()} CPUs`)
        console.log(`The Systems has ${this.freeMemory()} GBs of free memory`)
        console.log("\n\nDone")
    }

    /**
     * Get the current processor architecture 
     * node is running on 
     */
    architecture(){
        return os.arch()
    }

    /**
     * os.cpus() returns an array of object of the cpu
     * like 
     * [ 
     *  { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz', speed: 2300, times: { user: 12537170, nice: 0, sys: 13587780, idle: 81572980, irq: 0 } },
     *  { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz', speed: 2300, times: { user: 4836890, nice: 0, sys: 2814060, idle: 99057280, irq: 0 } },
     *  { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz', speed: 2300, times: { user: 11251200, nice: 0, sys: 8876790, idle: 86580270, irq: 0 } },
     *  { model: 'Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz', speed: 2300, times: { user: 5104890, nice: 0, sys: 3094090, idle: 98509230, irq: 0 } } 
     * ]
     * 
     * But in this case, we are only interest in 'how many are they?' question
     * @returns {Number} number of cpu cores available
     */
    numberOfCpus(){
        return os.cpus().length
    }

    /**
     * Get the availbale free memory 
     * in gbs
     * 
     * @returns {Decimal} availbale memory converted to GB
     */
    freeMemory(){
        return os.freemem() / ( 1024 * 1024 * 1024)
    }
}

module.exports = OperatingSystem