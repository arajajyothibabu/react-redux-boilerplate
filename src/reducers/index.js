/**
 * Created by jyothi on 22/8/17.
 */
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import galleryReducer from '../containers/Root/App/Gallery/reducer';

const rootReducer = combineReducers({
    routing,
    gallery: galleryReducer
});

export default rootReducer
