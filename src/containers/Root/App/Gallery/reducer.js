/**
 * Created by jyothi on 22/8/17.
 */
import {
    GALLERY_IMAGES_PENDING, GALLERY_IMAGES, GALLERY_IMAGES_FAILED,
    RESET_GALLERY
} from './actionTypes';
import { RESET_ALL } from '../../../../constants/actionTypes';

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

        case RESET_GALLERY:
        case RESET_ALL:
            return INITIAL_STATE;

        default:
            return state;

    }

};

export default galleryReducer;