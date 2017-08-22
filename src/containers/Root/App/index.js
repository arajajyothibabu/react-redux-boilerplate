/**
 * Created by jyothi on 22/8/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { GALLERY } from '../../../constants/endPoints';
import { resetAll } from '../../../actions';

function mapStateToProps(state) {
    return {
        router: state.routing,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetALL: () => dispatch(resetAll())
    };
}

class App extends Component{

    componentWillMount(){
        //
    }

    componentWillReceiveProps(nextProps){

    }

    componentDidMount(){

    }

    componentWillUnmount(){
        this.props.resetAll();
    }

    render() {
        const { children } = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title={
                            <Link to={`/`}>React Redux Boilerplate</Link>
                        }
                        iconElementRight={
                            <Link to={`/${GALLERY}`}>
                                <FlatButton label="Gallery" />
                            </Link>
                        }
                    />
                    <div>
                        {children}
                    </div>
                </div>
            </MuiThemeProvider>
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