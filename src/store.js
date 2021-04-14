import {applyMiddleware, createStore} from 'redux'
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducers, {},
    composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store
