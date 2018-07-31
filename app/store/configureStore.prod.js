import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { dashboardStateType } from '../reducers/dashboard';

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: dashboardStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
