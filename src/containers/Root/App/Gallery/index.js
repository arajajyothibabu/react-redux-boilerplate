/**
 * Created by jyothi on 22/8/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Tiles } from './components';
import { loadImages, resetGallery } from './actions';

function mapStateToProps(state) {
    return {
        router: state.routing,
        gallery: state.gallery
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadImages: () => dispatch(loadImages()),
        resetGallery: () => dispatch(resetGallery())
    };
}

class App extends Component{

    componentWillMount(){
        /**
         * Loads images before mount
         */
        this.props.loadImages();
    }

    componentWillReceiveProps(nextProps){

    }

    componentDidMount(){

    }

    componentWillUnmount(){
        this.props.resetGallery();
    }

    render() {
        const { gallery } = this.props;

        return (
            <div>
                <Tiles {...gallery}/>
            </div>
        )
    }
}

App.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);