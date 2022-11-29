import { takeLatest, put, delay, all, takeEvery } from "redux-saga/effects";
function* incrementFn() {
  yield delay(2000);
  yield put({ type: "INCREMENT_SUCCESS" });
}
function* decrementFn() {
  yield delay(2000);
  yield put({ type: "DECREMENT_SUCCESS" });
}
function* resetCounterFn() {
  yield put({ type: "RESET_COUNTER_SUCCESS" });
}
export function* watchUser() {
  yield all([
    takeEvery("INCREMENT", incrementFn),
    takeLatest("DECREMENT", decrementFn),
    takeEvery("RESET_COUNTER", resetCounterFn)
  ]);
}
