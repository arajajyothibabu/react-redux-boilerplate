/**
 * Created by jyothi on 22/8/17.
 */
import React from 'react'
import {Route, IndexRedirect} from 'react-router';
import App from '../containers/Root/App'
import Gallery from '../containers/Root/App/Gallery'
import {
    GALLERY
} from '../constants/endPoints';

export default <Route path="/" component={App}>

    {/*<IndexRedirect to="/login" />*/}

    <Route path={GALLERY} component={Gallery} />

    <Route path='*' component={App} />

</Route>;