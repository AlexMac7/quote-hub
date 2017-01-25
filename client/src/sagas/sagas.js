import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { getRecentQuotes } from '../services/api';
import { browserHistory } from 'react-router';

function* fetchRecentQuotes(feathersApp) {
  const quotes = yield call(getRecentQuotes, feathersApp);
  yield put({type: "RECENT_QUOTES_SUCCEEDED", quotes});
}

function* recentQuotesSaga(feathersApp) {
  yield* takeEvery("RECENT_QUOTES_REQUESTED", fetchRecentQuotes, feathersApp);
}

export default function* root(feathersApp) {
  yield [
    fork(recentQuotesSaga, feathersApp)
  ]
}
