import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { actions as articleActions, actionTypes as articleActionTypes } from '../reducers/article';
import { actions as combineActions } from '../reducers/combine';
import articleAPI from '../utils/articleAPI';

const {
    saveArticleRequest,saveArticleSuccess,saveArticleFailure,
    getArticleDetialRequest,getArticleDetialSuccess,getArticleDetialFailure,
    getArticlesRequest,getArticlesSuccess,getArticlesFailure,
    deleteArticleRequest,deleteArticleSuccess,deleteArticleFailure,
} = articleActions

const {
    popupRequest,
    sendingRequest, cancelRequest,
} = combineActions





function* deleteArticleFlow(article) {
  try {
    const response = yield call(articleAPI.deleteArticle, article)
    if (response) {
      yield put(deleteArticleSuccess(response))
      yield put(cancelRequest())
      yield put(popupRequest(response))
    }
  } catch(error) {
    yield put(deleteArticleFailure(error))
    yield put(cancelRequest())
    yield put(popupRequest(error))
  }
}
function* deleteArticleFlows({ article }) {
  yield put(sendingRequest())
  yield call(deleteArticleFlow, article)
}
export function* watchDeleteArticleFlow() {
  yield* takeEvery(articleActionTypes.DELETE_ARTICLE_REQUEST, deleteArticleFlows)
}


function* saveArticleFlow(article) {
  try {
    const response = yield call(articleAPI.saveArticle, article)
    if (response) {
      yield put(saveArticleSuccess(response))
      yield put(cancelRequest())
      yield put(popupRequest(response))
    }
  } catch(error) {
    yield put(saveArticleFailure(error))
    yield put(cancelRequest())
    yield put(popupRequest(error))
  }
}
function* saveArticleFlows({ article }) {
  yield put(sendingRequest())
  yield call(saveArticleFlow, article)
}
export function* watchEditPostFlow() {
  yield* takeEvery(articleActionTypes.SAVE_ARTICLE_REQUEST, saveArticleFlows)
}