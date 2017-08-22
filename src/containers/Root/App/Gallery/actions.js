/**
 * Created by jyothi on 22/8/17.
 */
import {
    GALLERY_IMAGES_PENDING, GALLERY_IMAGES, GALLERY_IMAGES_FAILED,
    RESET_GALLERY
} from './actionTypes';
import { getGalleryImages } from './api';

/**
 *
 * @returns {function(*, *)}
 */
export function loadImages() {
    return (dispatch, getState) => {
        return dispatch({
            types: [
                GALLERY_IMAGES_PENDING,
                GALLERY_IMAGES,
                GALLERY_IMAGES_FAILED
            ],
            payload: {
                promise: getGalleryImages()
                    .then((res) => {
                        return res;
                    }),
            },
            meta: {
                //Any information for promise
            },
            callbacks: {
                //Check middleware for callbacks
            }
        });
    };
}

/**
 *
 * @returns {function(*, *)}
 */
export function resetGallery() {
    return (dispatch, getState) => {
        return dispatch({
            type: RESET_GALLERY,
            payload: null,
            meta: {
                //Any information for promise
            },
            callbacks: {
                //Check middleware for callbacks
            }
        });
    };
}