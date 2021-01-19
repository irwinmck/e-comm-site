import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import { productListReducer, productDetailsReducer } from './reducers/product-reducers'

const reducer = combineReducers({
  // key here is actual variable name of the state
  productList: productListReducer,
  productDetails: productDetailsReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store