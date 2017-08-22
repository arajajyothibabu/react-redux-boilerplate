/**
 * Created by jyothi on 22/8/17.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod')
} else {
    module.exports = require('./Root.dev');
}