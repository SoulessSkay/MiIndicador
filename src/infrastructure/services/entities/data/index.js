import {put, takeLatest, call, spawn} from 'redux-saga/effects';
import api from '../../../api';
import {dataActions} from '../../../../application/actions/entities/data';

function* getDataSaga(action) {
  const url = 'https://mindicador.cl/api';
  let req = api(url);

  try {
    const data = yield call(req.get, '');
    yield put(dataActions.dataSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(dataActions.dataError(error));
  }
}

export function* watchGetDataSaga() {
  yield takeLatest(dataActions.getData, getDataSaga);
}

export default function* rootSaga() {
  yield spawn(watchGetDataSaga);
}
