/**
 * Created by jyothi on 22/8/17.
 */
import { callApi } from '../../../../api';
import {  } from '../../../../utils';

const GALLERY_LIST_API = "list";

export function getGalleryImages() {
    const config = {
        method: "GET"
    };
    const onSuccessCallback = json => {
        return json.splice(0, 20); //taking only 20 images
    };
    const onFailureCallback = response => {
        return {};
    };

    return callApi(GALLERY_LIST_API, config, onSuccessCallback, onFailureCallback);
}