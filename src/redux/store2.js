import {combineReducers, createStore} from 'redux';

import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

export const store = createStore(rootReducer);
