/**
 * Created by jyothi on 22/8/17.
 */
import {
    GALLERY_IMAGES_PENDING,
    GALLERY_IMAGES,
    GALLERY_IMAGES_FAILED
} from './actionTypes';

const INITIAL_STATE = {
    images: [],
    ...GALLERY_INITIAL_FLAG_STATE
};

const GALLERY_INITIAL_FLAG_STATE = {
    images_pending: false,
    images_failed: false
};

const galleryReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case GALLERY_IMAGES_PENDING:
            return {
                ...state,
                ...GALLERY_INITIAL_FLAG_STATE,
                images_pending: true
            };

        case GALLERY_IMAGES:
            return {
                ...state,
                ...GALLERY_INITIAL_FLAG_STATE,
                images: action.payload
            };

        case GALLERY_IMAGES_FAILED:
            return {
                ...state,
                ...GALLERY_INITIAL_FLAG_STATE,
                images_failed: true
            };

        default:
            return state;

    }

};

export default galleryReducer;