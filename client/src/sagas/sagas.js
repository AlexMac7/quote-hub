import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { createQuote, getRecentQuotes } from '../services/api';

function* fetchRecentQuotes(feathersApp) {
  const quotes = yield call(getRecentQuotes, feathersApp);
  yield put({type: "RECENT_QUOTES_SUCCEEDED", quotes});
}

function* recentQuotesSaga(feathersApp) {
  yield* takeEvery("RECENT_QUOTES_REQUESTED", fetchRecentQuotes, feathersApp);
}

function* addQuote(feathersApp, action) {
  const resp = yield call(createQuote, feathersApp, action.Author, action.Quote, action.imageURL);
  console.log(resp);
  yield browserHistory.push('');
}

function* addQuoteSaga(feathersApp) {
  yield* takeEvery("ADD_QUOTE_REQUESTED", addQuote, feathersApp);
}


export default function* root(feathersApp) {
  yield [
    fork(recentQuotesSaga, feathersApp),
    fork(addQuoteSaga, feathersApp)
  ]
}
