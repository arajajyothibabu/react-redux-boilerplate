/**
 * Created by jyothi on 22/8/17.
 */
class Logger {

    /**
     *
     * @param {Object} options = {enable: {boolean}}
     */
    constructor(options){
        /**
         * merging options explicitly provided with default options if any
         * @type {*}
         */
        this.options = options || {}; //TODO: more flexible options
        const { enable } = this.options;
        this.enabled = (typeof enable === 'undefined' || enable === null) ? true : enable; //defaults enable {true}
    }

    log(...args){
        this.enabled && console.log.apply(console, args);
    }

    info(...args){
        this.enabled && console.info.apply(console, args);
    }

    debug(...args){
        this.enabled && console.debug.apply(console, args);
    }

    warn(...args){
        this.enabled && console.warn.apply(console, args);
    }

    error(...args){
        this.enabled && console.error.apply(console, args);
    }

    track(...args){ //TODO: can use this to track Dashboard usage
        /**
         * API calls to update the tracked usage of Dashboard
         * Logging events to server
         */
    }

}

const __DEV__ = !(process.env.NODE_ENV === "production");

const loggerOptions = { //TODO: can implement more options
    enable: __DEV__ //checking if DEV mode //FIXME: only for node based development
};

export default new Logger(loggerOptions);