import React from "react";
import {Container, Grid, Paper,  Typography, InputAdornment} from "@material-ui/core";
import classNames from "classnames";

import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import {SearchTextField }from "../../components/SearchTextField";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import {Tags} from "../../components/Tags";
import {AddTweetFrom} from "../../components/AddTweetForm";
import {HomeUseStyles} from "./theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/contracts/actionCreators";
import { selectTweetsItems} from "../../store/ducks/tweets/contracts/selectors";

import {Route} from "react-router-dom";
import {BackButton} from "../../components/BackButton";
import {FullTweet} from "../../components/FullTweet";
import {fetchTags} from "../../store/ducks/tags/contracts/actionCreators";


export const Home = () => {
    const dispatch = useDispatch();
    const classes = HomeUseStyles();

    const tweets = useSelector(selectTweetsItems);

    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (

        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classNames(classes.twitsWrapper)} variant={"outlined"}>
                        <Paper className={classNames(classes.tweetHeader, classes.tweet)} variant={"outlined"}>
                            <Route path="/home/:any">
                               <BackButton/>
                            </Route>
                            <Route path={["/home", "/home/search"]} exact>
                                <Typography variant={"h6"}>Твиты</Typography>
                            </Route>
                            <Route path={"/home/tweet"}>
                                <Typography variant={"h6"}>Твитнуть</Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetFrom classes={classes} />
                                </div>
                                <div className={classes.addFormBottomLine} />
                            </Paper>
                        </Route>
                        <Route path="/home" exact>
                            {
                                tweets.map((tweet) =>
                                    <Tweet
                                        key={tweet._id}
                                        {...tweet}
                                        classes={classes}
                                    />)
                            }
                        </Route>
                        <Route path="/home/tweet/:_id" component={FullTweet} exact/>
                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes} />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать?!</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dock Of Shame"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @FavDockOfShame
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </
            Container>
    );
};