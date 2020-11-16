import React from 'react';
import Home from '../Home';
import Header from '../Header';
import Product from '../Product';
import SignIn from '../Users/SignIn';
import SignUp from '../Users/SignUp';
import Profile from '../Users/Profile';
import NotFound from '../../helpers/errors/404';
import { Route, Switch } from 'react-router-dom';

const Routing = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={SignIn}/>
                <Route path='/registration' component={SignUp}/>
                <Route path='/product/:id' component={Product}/>
                <Route path='/profile' component={Profile}/>
                <Route component={NotFound}/>
            </Switch>
        </>
    )
}
export default Routing