import {applyMiddleware, createStore} from 'redux'
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import {setupInterceptors} from "./apis/customAxios";


const store = createStore(
    reducers, {},
    composeWithDevTools(applyMiddleware(reduxThunk))
)

setupInterceptors(store)

export default store
