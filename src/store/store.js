import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));
// createStore method takes 3 inputs as argument, out of 3 two are optional middleWares are important as it wrap around any dispatch action and help us to log initial state, action and final or current state
// there are many kind of enhancers like middlewares,logger and many more .
export const store = createStore(rootReducer, undefined, composedEnhancers);
