import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['user']

}
const persistedReducer = persistReducer(persistConfig, rootReducer)
//Middlewares are feature that generates display of states of program. we can build our own style of display of states by configuring it or we can use default logger from redux//

//when we want to display states while in development
const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

// when we want to stop display states while in production state
// const middleWares = [process.env.NODE_ENV === 'production' && logger].filter(Boolean);


const composedEnhancers = compose(applyMiddleware(...middleWares));

// createStore method takes 3 inputs as argument, out of 3 two are optional.// middleWares are important as it wrap around any dispatch action and help us to log initial state, action and final or current state
// there are many kind of enhancers like middlewares,logger and many more .
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store)