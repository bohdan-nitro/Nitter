import React from "react";
import classNames from "classnames";
import Avatar from '@material-ui/core/Avatar/Avatar';
import Button from '@material-ui/core/Button/Button';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {IconButton, Paper} from "@material-ui/core";

import {HomeUseStyles} from "../pages/Home/theme";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchAddTweet} from "../store/ducks/tweets/contracts/actionCreators";


interface AddTweetFormProps {
    classes: ReturnType<typeof HomeUseStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetFrom: React.FC<AddTweetFormProps> = ({classes, maxRows}: AddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const [text, setText] = React.useState<string>("");
    const limitPercent = Math.round(text.length / 280) * 100;
    const textCount = MAX_LENGTH - text.length;
    //Проверяем есть ли у нас такой элемент вообще на странице
    const handleChangeArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            //Если он есть то мы прописываем стейт сюда
            setText(e.currentTarget.value)
        }
    };

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text));
        setText("");
    };

    return (

        <Paper className={classNames(classes.twitsWrapper)} variant={"outlined"}>
            <Route path={["/home", "/home/search"]} exact>
                <Paper>
                    <div className={classes.addForm}>
                        <div className={classes.addFormBody}>
                            <Avatar className={classes.tweetAvatar}
                                    alt={"Avatar"}
                                    src={"https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82425810_121300232737595_7235936819261615660_n.jpg?_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=7fVU33jkpI8AX8LLzdq&tp=1&oh=1e858461200634ed118209650a2ea55a&oe=5FE33416"
                                    }
                            />
                            <TextareaAutosize
                                onChange={handleChangeArea}
                                className={classes.addFormTextarea}
                                placeholder={"Что нового?"}
                                value={text}
                                rowsMax={maxRows}
                            />
                        </div>
                        <div className={classes.addFormBottom}>
                            <div className={classNames(classes.tweetFooter)}>
                                <IconButton color={"primary"}>
                                    <PostAddIcon style={{fontSize: 26}}/>
                                </IconButton>
                                <IconButton color={"primary"}>
                                    <EmojiEmotionsIcon style={{fontSize: 26}}/>
                                </IconButton>

                            </div>
                            <div className={classes.addFormBottomRight}>
                                {
                                    text && (<>
                                        <span>{textCount}</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress
                                                variant={"static"}
                                                size={20}
                                                thickness={5}
                                                value={text.length >= MAX_LENGTH ? 100 : limitPercent}
                                                style={text.length >= MAX_LENGTH ? {color: "red"} : undefined}/>
                                            <CircularProgress
                                                style={{color: "rgba(0,0,0,0.1)"}}
                                                variant={"static"}
                                                size={22}
                                                thickness={5}
                                                value={100}
                                            />
                                        </div>
                                    </>)
                                }

                                <Button onClick={handleClickAddTweet} disabled={text.length >= MAX_LENGTH}
                                        color={"primary"} variant={"contained"}>
                                    Твитнуть
                                </Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </Route>
        </Paper>

    )
};