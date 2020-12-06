
import {RootState} from "../../../store";
import {createSelector} from "reselect";
import {LoadingState, TweetsState} from "./state";


export const selectTweet = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState) => selectTweet(state).loadingState;
export const selectIsTweetsLoading = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweet, tweets => tweets.items);