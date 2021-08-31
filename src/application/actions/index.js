import {combineReducers} from 'redux';
import data from './entities/data';
import dataByType from './entities/dataByType';

const reducer = combineReducers({
  entities: combineReducers({
    data,
    dataByType,
  }),
  //ui: combineReducers({}),
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STATE') {
    state = undefined;
  }

  return reducer(state, action);
};

export default rootReducer;
