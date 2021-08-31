import {call, delay, put} from 'redux-saga/effects';
import axios from 'axios';

let headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Connection: 'keep-alive',
};

function _printRequest(request, params, result) {
  console.log(
    `Endpoint: ${request} - Headers: ${JSON.stringify(
      headers,
    )}\nBody: ${JSON.stringify({params}, null, 2)}\nResponse: ${JSON.stringify(
      result,
      null,
      2,
    )}\n`,
  );
}

function* _processResponse(method, result, action = null) {
  try {
    const response = yield result;

    let _res = response;

    const error = response?.message || response?.error || response.data?.error;

    if (error) {
      _res = {error};

      console.log(error, method);

      if (response?.error?.statusCode === 403 && action) {
        yield delay(1200);
        yield put(action);
      }
    }

    return _res;
  } catch (error) {
    console.log(error, method);
  }
}

function _processesRequest(method, urlBase) {
  return function* (endpoint, params = null, optionalsHeaders = null, action) {
    const request = `${urlBase}${endpoint}`;

    try {
      const response = yield call(() =>
        axios({
          method: method,
          url: request,
          ...(params ? {data: JSON.stringify(params)} : {}),
        }),
      );
      const result = yield _processResponse(method, response, action);
      headers = optionalsHeaders ? {...headers, ...optionalsHeaders} : headers;
      // descomentar para ver el requerimiento
      _printRequest(request, params, result);

      return result;
    } catch (error) {
      console.log(`error: ${error}\n`);
    }
  };
}

const api = urlBase => ({
  get: _processesRequest('get', urlBase),
  post: _processesRequest('post', urlBase),
  put: _processesRequest('put', urlBase),
  delete: _processesRequest('delete', urlBase),
});

export default api;
