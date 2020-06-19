import React from 'react';
import {App} from './App';
import {render} from 'react-dom';
import { combineReducers,createStore ,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import  bbAddToCart from './../src/components/bb-add-to-cart/reducer'
import thunkMiddleware from 'redux-thunk';

let store = createStore(combineReducers({
    bbAddToCart:bbAddToCart
}),compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

render(<Provider store = {store}>
    <App/>
    </Provider>,document.getElementById("root"))