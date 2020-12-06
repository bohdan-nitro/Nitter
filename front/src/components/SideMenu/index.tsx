import React, {useState} from "react";
import {IconButton, Typography, Button} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';
import {HomeUseStyles} from "../../pages/Home/theme";
import Hidden from "@material-ui/core/Hidden";
import CreateIcon from '@material-ui/icons/Create';
import {ModalBlock} from "../ModalBlock";
import {AddTweetFrom} from "../AddTweetForm";
import {Link} from "react-router-dom";

interface SideMenuProps {
    classes: ReturnType<typeof HomeUseStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {

    const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

    const handleAddClickAddTweet = () => {
        setVisibleAddTweet(true);
    };

    const onCloseAddTweet = () => {
        setVisibleAddTweet(false);
    };
    return(
        <ul className={classes.sideMenuList}>
            <div>
                <li className={classes.twitterIcon}>
                    <Link to={"/home"}>
                        <IconButton className={classes.logo} aria-label="delete">
                            <TwitterIcon className={classes.logoIcon} color={"secondary"}></TwitterIcon>
                        </IconButton>
                    </Link>
                </li>
            </div>
            <div>
                <li className={classes.sideMenuListItem}>
                        <SearchIcon className={classes.sideMenuListItemIcon} color={"primary"}> </SearchIcon>
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel} variant={"h6"}>Поиск</Typography>
                    </Hidden>
                </li>
            </div>
            <div>
                <li className={classes.sideMenuListItem}>
                        <NotificationsNoneIcon className={classes.sideMenuListItemIcon}
                                               color={"primary"}> </NotificationsNoneIcon>
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel} variant={"h6"}>Уведомление</Typography>
                    </Hidden>
                </li>
            </div>
            <div>
                <li className={classes.sideMenuListItem}>
                        <MailOutlineIcon className={classes.sideMenuListItemIcon}
                                         color={"primary"}> </MailOutlineIcon>
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel} variant={"h6"}>Сообщение</Typography>
                    </Hidden>
                </li>
            </div>
            <div>
                <li className={classes.sideMenuListItem}>
                        <TurnedInNotIcon className={classes.sideMenuListItemIcon} color={"primary"}> </TurnedInNotIcon>
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel} variant={"h6"}>Закладки</Typography>
                    </Hidden>
                </li>
            </div>
            <div>
                <li className={classes.sideMenuListItem}>
                        <ListIcon className={classes.sideMenuListItemIcon} color={"primary"}> </ListIcon>
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel} variant={"h6"}>Список</Typography>
                    </Hidden>
                </li>
            </div>
            <div>
                <li className={classes.sideMenuListItem}>
                        <UserIcon className={classes.sideMenuListItemIcon} color={"primary"}> </UserIcon>
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel} variant={"h6"}>Профиль</Typography>
                    </Hidden>
                </li>
            </div>
            <li className={classes.sideMenuListItem}>
                <Button
                    onClick={handleAddClickAddTweet}
                    className={classes.sideMenuListButton}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}>
                    <Hidden smDown>
                        Твитнуть
                    </Hidden>
                    <Hidden mdUp>
                        <CreateIcon>

                        </CreateIcon>
                    </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet} title={""}>
                    <div style={{ width: 550}}>
                        <AddTweetFrom maxRows={15} classes={classes}/>
                    </div>
                </ModalBlock>
            </li>
        </ul>

    )
}