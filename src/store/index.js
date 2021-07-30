import {applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'   //legge lo stato
import thunkMiddleware from 'redux-thunk' //avere funzioni asincrone nelle action creator 
import { composeWithDevTools } from 'redux-devtools-extension'  

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;