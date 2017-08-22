/**
 * Created by jyothi on 22/8/17.
 */

/**
 * checks whether a value is defined
 * @param value {*}
 * @param strict {Boolean}
 * @returns {Boolean}
 */
export function isDefined(value, strict = true){
    if(!strict && value == 0) return true;
    return value && value !== null && typeof value !== 'undefined';
}