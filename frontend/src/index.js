import React from 'react'
import ReactDOM from 'react-dom'
// Provider keeps track of global store of component states
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Imports reducers from reducer folder
import { reducers } from './reducers';
import App from './app.js'

// Sets up Redux store 
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)