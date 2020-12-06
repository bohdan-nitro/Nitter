import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import Button from "@material-ui/core/Button";
import {ModalBlock} from "../components/ModalBlock";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl";

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        height: "100vh",
    },
    blueSide: {
        backgroundColor: "#1A91DA",
        display: "flex",
        flex: "0 0 50%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",

    },
    blueSideBigIcon: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "350%",
        height: "350%",
    },
    blueSideListInfo: {
        position: "relative",
        width: 380,
        listStyle: "none",
        padding: 0,
        margin: 0,
        "& h6": {
            color: "white",
            fontWeight: 700,
            fontSize: 20,
            display: "flex",
            alignItems: "center",

        }
    },
    blueSideListIcon: {
        fontSize: 32,
        marginRight: 15,

    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    loginSide: {
        flex: "0 0 50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",

    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },

}));

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();
    const handleClickOpenSignIn = (): void => {
        setVisibleModal("signIn")
    };
    const handleClickOpenSignUp = (): void => {
        setVisibleModal("signUp")
    };
    const handleClose = (): void => {
        setVisibleModal(undefined)
    };


    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon color={"primary"} className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><Typography variant={"h6"}>
                        <SearchIcon className={classes.blueSideListIcon}/>
                        Читайте что вам интересно
                    </Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant={"h6"}>
                        <PeopleOutlineIcon className={classes.blueSideListIcon}/>
                        Узнайте что говорят в мире
                    </Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant={"h6"}>
                        <ModeCommentIcon className={classes.blueSideListIcon}/>
                        Присоиденяйтесь к общению
                    </Typography></li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color={"primary"} className={classes.loginSideTwitterIcon}/>
                    <Typography className={classes.loginSideTitle} variant={"h4"}>Узнайте что происходит в мире прямо
                        сейчас</Typography>
                    <Typography><b>Присоиденяйтесь к Твиттеру прямо сейчас</b></Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp}
                            style={{marginBottom: 20}}
                            variant={"contained"}
                            color={"primary"}
                            fullWidth>
                        Зарегестрироваться
                    </Button>
                    <Button onClick={handleClickOpenSignIn}
                            variant={"outlined"}
                            color={"primary"}
                            fullWidth>
                        Войти
                    </Button>
                </div>
                <ModalBlock visible={visibleModal === "signIn"}
                            onClose={handleClose}
                            classes={classes}
                            title={"Войти в аккаунт"}>
                    <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                        <FormGroup aria-label="position" row>
                            <TextField
                                className={classes.loginSideField}
                                autoFocus
                                id="email"
                                label="E-Mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                className={classes.loginSideField}
                                autoFocus
                                id="password"
                                label="Пароль"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                type="password"
                                fullWidth
                            />
                            <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
                                Войти
                            </Button>
                        </FormGroup>
                    </FormControl>
                </ModalBlock>
                <ModalBlock visible={visibleModal === "signUp"}
                            onClose={handleClose}
                            classes={classes}
                            title={"Создайте учетную запись"}>
                    <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                        <FormGroup aria-label="position" row>
                            <TextField
                                className={classes.registerField}
                                autoFocus
                                id="name"
                                label="Имя"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                type="name"
                                fullWidth
                            />
                            <TextField
                                className={classes.registerField}
                                autoFocus
                                id="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                className={classes.registerField}
                                autoFocus
                                id="password"
                                label="Пароль"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                type="password"
                                fullWidth
                            />
                            <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
                                Далее
                            </Button>
                        </FormGroup>
                    </FormControl>
                </ModalBlock>
            </div>
        </div>
    );
};

export default SignIn;