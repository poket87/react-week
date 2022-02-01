import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import bucket from "./modules/voca";

const middlewares = [thunk];
// 여러개의 리듀서를 묶을때는 계속 써주면 된다. (ex. combineReducers({bucket, bucket2, bucket3 ...}))
const rootReducer = combineReducers({ bucket });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
