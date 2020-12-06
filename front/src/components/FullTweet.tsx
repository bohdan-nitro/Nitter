import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Tweet} from "./Tweet";
import {HomeUseStyles} from "../pages/Home/theme";
import {selectIsTweetLoaded, selectTweetData} from "../store/ducks/tweet/contracts/selectors";
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/contracts/actionCreators";

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = HomeUseStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoaded = useSelector(selectIsTweetLoaded);
    const params: { id?: string } = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }
        return () => {
            dispatch(setTweetData(undefined));
        }

    }, [dispatch, id]);

    if (tweetData) {
      return  <Tweet classes={classes} {...tweetData}/>;
    }

    return null;
};