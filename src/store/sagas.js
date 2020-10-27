import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* useraccountconnector_post_registration_createWorker(action) {
  try {
    const result = yield call(
      apiService.useraccountconnector_post_registration_create,
      action
    )
    yield put(
      actions.useraccountconnector_post_registration_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.useraccountconnector_post_registration_createFailed(err, action)
    )
  }
}
function* useraccountconnector_post_registration_createWatcher() {
  yield takeEvery(
    types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE,
    useraccountconnector_post_registration_createWorker
  )
}
export default function* rootSaga() {
  const sagas = [useraccountconnector_post_registration_createWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
