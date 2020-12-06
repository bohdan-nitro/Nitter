import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/actionCreators/reducer";
import {tagsReducer} from "./ducks/tags/contracts/reducer";
import {tweetReducer} from "./ducks/tweet/contracts/reducer";


export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tweet: tweetReducer,
    tags: tagsReducer,

});