import React, { useEffect } from 'react';
import Routing from '../Routing';
import { connect } from 'react-redux';
import injectGlobalStyle from '../../helpers/styles'
import { isAuth } from '../../actions/userActions.js'

const GlobalStyle = injectGlobalStyle();
const App = (props) => {
    const { dispatch } = props;
    useEffect(() => {
        const token = localStorage.getItem('jwt-token');
        if(token)
            isAuth(dispatch)
    })
    return (
        <>
            <Routing />
            <GlobalStyle />
        </>
    );
}

export default connect()(App);
