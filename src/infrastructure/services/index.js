import {call, fork} from 'redux-saga/effects';
import {channel} from 'redux-saga';
// Sagas
import data from './entities/data';
import dataByType from './entities/dataByType';

function* watchFetchRefreshToken() {
  const chan = yield call(channel);

  yield fork(data);
  yield fork(dataByType);
}

// General forking sagas.
export default function* rootSaga() {
  yield fork(watchFetchRefreshToken);
}
