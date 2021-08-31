import {createSlice, createAction} from '@reduxjs/toolkit';
import initialState from '../../../../domain/entities/dataByType';

function dataByTypeSuccess(state, action) {
  state.data = {...action.payload, success: true};
}
function dataByTypeError(state, action) {
  state.data = {...action.payload, error: true};
}

const getDataByType = createAction('getDataByType');

// ------------- connection ------------- //

const dataByTypeReducer = createSlice({
  name: 'dataByType',
  initialState,
  reducers: {
    dataByTypeSuccess,
    dataByTypeError,
  },
});

export const dataByTypeActions = {
  ...dataByTypeReducer.actions,
  getDataByType,
};

export default dataByTypeReducer.reducer;
