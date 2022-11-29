import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducer";
import { watchUser } from "./saga";
const rootReducer = combineReducers({
  counter: counterReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(watchUser);
