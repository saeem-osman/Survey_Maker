import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers/index'
import reduxThunk from 'redux-thunk'

//for testing
import axios from 'axios'
window.axios = axios;

const store = createStore(reducers,{},applyMiddleware(reduxThunk))



ReactDOM.render(
    <Provider store = {store} >
    <App />
    </Provider>
    ,document.getElementById('root')
)



console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY)
console.log('ENVIRONMENT KEY IS ', process.env.NODE_ENV)
