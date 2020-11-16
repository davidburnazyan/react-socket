import React from 'react';
import ReactDOM from 'react-dom';
import reducer from "./reducers";
import { createStore } from 'redux';
import App from './components/App/';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))