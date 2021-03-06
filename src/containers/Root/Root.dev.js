/**
 * Created by jyothi on 22/8/17.
 */
/**
 * Created by jyothi on 22/8/17.
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import { Router } from 'react-router';
import ReactGA from 'react-ga';

/**
 * Initializing Google Analytics
 */
ReactGA.initialize(window.gaTrackingId, {
    debug: true
});

/**
 * logs the new page view
 */
function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

const Root = ({ store, history }) => (
    <Provider store={store}>
        <div>
            <Router history={history} routes={Routes} onUpdate={logPageView}/>
        </div>
    </Provider>
);


Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root