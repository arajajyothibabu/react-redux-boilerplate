/**
 * Created by jyothi on 22/8/17.
 */
import { API_ROOT } from '../config';
import { isDefined } from '../utils';
import logger from '../utils/logger';

export const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const defaultConfig = {
    headers: HEADERS
    //TODO: if any
};

const makeConfig = (config) => {
    return {
        headers: {
            ...defaultConfig.headers,
            //TODO: if any
        },
        body: config.body,
        method: config.method
    };
};

/**
 *
 * @param resolve
 * @param callback
 * @param result
 * @returns {*}
 */
const handleSuccess = (resolve, callback, result) => {
    if(isDefined(callback) && typeof callback === 'function') {
        return resolve(callback(result));
    }else{
        return resolve(result);
    }
};

/**
 *
 * @param reject
 * @param callback
 * @param error
 * @returns {*}
 */
const handleFailure = (reject, callback, error) => {
    if(isDefined(callback) && typeof callback === 'function') {
        return reject(callback({type: "Error", payload: error}));
    }else{
        return reject(null);
    }
};

export const callApi = (url, config, onSuccess, onFailure) => {
    return new Promise((resolve, reject) => {
        const fullUrl = API_ROOT + url;
        const options = makeConfig(config);
        logger.info("Came to make Ajax request with options for URL: ", url, " are : =>", options);
        fetch(fullUrl, options).then(response => {
            logger.info("Response for URL: " + fullUrl, response, response.body);
            response.json().then(json => {
                logger.log("json", json);
                if (!response.ok) {
                    logger.warn("Warning:::: ", json, "for URL: => " + fullUrl, " with Request Options: => ", options);
                    handleFailure(reject, onFailure, response);
                }
                handleSuccess(resolve, onSuccess, json);
            })
        }).catch(err => {
            logger.error("Error:::: ", err, "for URL: => " + fullUrl, " with Request Options: => ", options);
            handleFailure(reject, onFailure, err);
        });
    });
};