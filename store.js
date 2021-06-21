import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './src/reducers/AuthReducer';
const rootReducer = combineReducers({ auth: authReducer });

const initialState = {
  auth: {
    isLoggedIn: false,
    user: null,
  },
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
