import {createSlice, createAction} from '@reduxjs/toolkit';
import initialState from '../../../../domain/entities/data';

function dataSuccess(state, action) {
  state.data = {...action.payload, success: true};
}
function dataError(state, action) {
  state.data = {...action.payload, error: true};
}

const getData = createAction('getData');

// ------------- connection ------------- //

const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataSuccess,
    dataError,
  },
});

export const dataActions = {
  ...dataReducer.actions,
  getData,
};

export default dataReducer.reducer;
