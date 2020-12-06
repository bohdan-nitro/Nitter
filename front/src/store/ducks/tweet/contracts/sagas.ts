import {call, takeEvery, put} from "redux-saga/effects";
import {LoadingState} from "../state";
import {setTweetLoadingState, setTweetData} from "./actionCreators";
import {FetchTweetDataActionInterface, TweetActionsType,} from "./actionType";
import {TweetsApi} from "../../../../services/api/tweetsApi";
import {Tweet} from "../../tweets/contracts/state";


export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
