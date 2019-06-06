import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, receiveApiData, REQUEST_API_POST, receiveApiPost } from "./actions";
import { fetchData, fetchPost, fetchUser, fetchComments } from "./api";


function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log('Error',e);
  }
}

function* getApiPost(action) {
  try {
    const post = yield call(fetchPost, action.id);
    const user = yield call(fetchUser, post.userId);
    const comments = yield call(fetchComments, action.id);
    const data = {
      user, post, comments
    }
    yield put(receiveApiPost(data));
  } catch (e) {
    console.log('Error',e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
  yield takeLatest(REQUEST_API_POST, getApiPost);
}
