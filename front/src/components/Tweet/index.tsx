import React from "react";
import classNames from "classnames";
import {Grid, IconButton, Paper, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import Like from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import {HomeUseStyles} from "../../pages/Home/theme";
import {Link} from "react-router-dom";


interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof HomeUseStyles>;
    user: {
        fullName: string;
        userName: string;
        avatarUrl: string;
    };

}

export const Tweet: React.FC<TweetProps> = ({classes, text, user, _id}: TweetProps): React.ReactElement => {
    return (
        <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
            <Paper className={classNames(classes.tweetHeader, classes.tweet)}>
                <Grid container spacing={3}>
                    <Avatar className={classes.tweetAvatar} alt={`Аватарка Пользователя ${user.fullName}`}
                            src={user.avatarUrl}/>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullName}</b>&nbsp;
                            <span className={classes.tweetColorUser}>@{user.userName}</span>&nbsp;
                            <span className={classes.tweetColorUser}>`</span>&nbsp;
                            <span className={classes.tweetColorUser}>1ч</span>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton color={"secondary"}>
                                    <CommentIcon style={{fontSize: 20}}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton color={"secondary"}>
                                    <RepeatIcon style={{fontSize: 20}}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton color={"secondary"}>
                                    <Like style={{fontSize: 20}}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton color={"secondary"}>
                                    <ReplyIcon style={{fontSize: 20}}/>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Paper>
        </Link>
    );
};