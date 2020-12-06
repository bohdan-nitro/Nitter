
import {Action} from "redux";
import {LoadingState, Tweet, TweetsState} from "./state";

export enum TweetsActionsType {
    SET_TWEETS = "tweets/SET_TWEETS",
    FETCH_TWEETS = "tweets/FETCH_TWEETS",
    SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
    FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
    ADD_TWEET = "tweets/ADD_TWEET",
}

//Если мы наследуемся от Action(redux) то мы в любом случае должны указать тип иначе будет ошибка
export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState["items"];

}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS;

}
export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState;

}

export interface FetchAddTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string;

}
export interface AddTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;

}
//Actions
//Функция получает твитсет айтемс и возвращает обьект сеттвитекшнинтерфейс который содержит в себе типы из интерфейса
export const setTweets = (payload: TweetsState["items"]): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const setTweetLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export const fetchAddTweet = (payload: string): FetchAddTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
});
export const addTweet = (payload: Tweet): AddTweetsActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
});

export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingStateActionInterface | FetchTweetsActionInterface;