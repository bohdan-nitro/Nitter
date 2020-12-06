import {all} from "redux-saga/effects";
import {tweetsSaga} from "./tweets/sagas";
import {tagsSaga} from "./tags/contracts/sagas";
import {tweetSaga} from "./tweet/contracts/sagas";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga(),
        tweetSaga()
    ]);
    
}