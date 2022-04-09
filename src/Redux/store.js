import { createStore, combineReducers,applyMiddleware,compose  } from "redux";
// import { registerReducer } from "./Register/reducer";
import { loginReducer } from "./reducer";
import thunk from "redux-thunk";
const loggerMiddleware1=(store)=>(next)=>(action)=>{
    next(action);
}
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const middleware = [thunk,loggerMiddleware1];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const mainReducer=combineReducers({
    // registerReducer:registerReducer,
    loginReducer: loginReducer
})
export const store =createStore(mainReducer,enhancer);