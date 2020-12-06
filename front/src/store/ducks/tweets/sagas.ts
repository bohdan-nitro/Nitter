import {call, takeLatest, put} from "redux-saga/effects";
import {LoadingState} from "./contracts/state";
import {
    FetchAddTweetsActionInterface,
    setTweetLoadingState,
    setTweets,
    TweetsActionsType
} from "./contracts/actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";

export function* fetchTweetsRequest() {
    try{
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    }
    catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
    
}

export function* fetchAddTweetRequest({ payload}: FetchAddTweetsActionInterface) {
    try{
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                "fullName": "Stout Ray",
                "userName": "evangelina",
                "avatarUrl": "https://source.unsplash.com/random/100x100 4",
            },


        };
        const item = yield call(TweetsApi.addTweet, data);
        yield put(setTweets(item));
    }
    catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }

}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);

}