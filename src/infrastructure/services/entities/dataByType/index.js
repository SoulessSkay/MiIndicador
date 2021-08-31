import {put, takeLatest, call, spawn} from 'redux-saga/effects';
import api from '../../../api';
import {dataByTypeActions} from '../../../../application/actions/entities/dataByType';

function* getDataByTypeSaga(action) {
  const url = 'https://mindicador.cl/api';
  let req = api(url);

  const {type} = action.payload;
  console.log('actiopayload', type);

  try {
    const data = yield call(req.get, '/' + type);
    yield put(dataByTypeActions.dataByTypeSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(dataByTypeActions.dataByTypeError(error));
  }
}

export function* watchGetDataByTypeSaga() {
  yield takeLatest(dataByTypeActions.getDataByType, getDataByTypeSaga);
}

export default function* rootSaga() {
  yield spawn(watchGetDataByTypeSaga);
}
