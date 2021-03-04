import { put, takeEvery, call, all } from 'redux-saga/effects';
import { SagaActionsTypes } from './types';
import {
  FetchSearchOptionsRequest,
  fetchSearchOptionsRequest,
  FetchSearchOptionsSuccess,
  fetchSearchOptionsSuccess,
  FetchSearchOptionsFailure,
  fetchSearchOptionsFailure,
} from './actions';
import { API } from '../api';
import { SearchOptions } from '../redux/reducers';

function* watchFetchSearchOptions() {
  yield takeEvery(SagaActionsTypes.handleFetchSearchOptions, fetchSearchOptions);
}

function* fetchSearchOptions() {
  try {
    yield put<FetchSearchOptionsRequest>(fetchSearchOptionsRequest());
    // @ts-ignore
    const searchOptions = yield call<SearchOptions>(API.getSearchOptions);
    yield put<FetchSearchOptionsSuccess>(fetchSearchOptionsSuccess(searchOptions));
  } catch (error) {
    yield put<FetchSearchOptionsFailure>(fetchSearchOptionsFailure(error.message));
  }
}

export function* rootSaga() {
  yield all([watchFetchSearchOptions()]);
}
