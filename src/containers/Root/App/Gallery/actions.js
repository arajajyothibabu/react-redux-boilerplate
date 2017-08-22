/**
 * Created by jyothi on 22/8/17.
 */
import {
    GALLERY_IMAGES_PENDING,
    GALLERY_IMAGES,
    GALLERY_IMAGES_FAILED
} from './actionTypes';
import { getGalleryImages } from './api';

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