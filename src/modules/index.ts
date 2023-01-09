import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { takeEvery } from "@redux-saga/core/effects";
import { USER_LIST_REQUEST } from "./constants";
import { UserListReducer } from "./reducers";
import { UserListRequestSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

//  create store
export const store = configureStore({
  reducer: {
    userList: UserListReducer,
  },
  middleware: () => middleware,
});

export type RootState = ReturnType<typeof store.getState>;

// preparing sagas
function* appSaga() {
  yield takeEvery(USER_LIST_REQUEST, UserListRequestSaga);
}

// runs sagas
sagaMiddleware.run(appSaga);
