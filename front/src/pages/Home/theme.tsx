import {makeStyles, Theme} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const HomeUseStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: "100vh"
    },
    logoIcon: {
        marginTop: "10px",
        fontSize: 36,
    },
    logo: {
        margin: "10px -15px"
    },
    sideMenuList: {
        position: "sticky",
        listStyle: "none",
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        display: "flex",
        alignItems: "center",
        borderRadius: 30,
        height: 50,
        marginBottom: 15,
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        "&:hover": {
            "& h6": {
                color: theme.palette.primary.dark,
            },
            "& svg path": {
                color: theme.palette.primary.dark,
            },
            backgroundColor: "rgb(29, 161, 242, 0.1)",
        },

    },
    twitterIcon: {
        width: 40,
        transition: "all 0.4s ease-in-out",
        "&:hover": {
            "& svg path": {
                transition: "all 0.3s ease",
                color: theme.palette.primary.main,
            },
        },

    },
    sideMenuListLabel: {
        fontWeight: 700,
        fontSize: "18px",
        marginLeft: 15,
    },
    sectionBackground: {
        display: "flex",
        backgroundColor: "#121212",
        width: "100%",
        height: "100vh",
    },
    sideMenuListItemIcon: {
        fontSize: 32,
    },
    sideMenuListButton: {},
    textColor: {
        color: "#fbfdff",
    },
    iconColor: {
        color: "#e22028",
    },
    twitsWrapper: {
        borderRadius: 0,
        height: "100%",
        borderTop: 0,
        borderBottom: 0,

    },
    tweetHeader: {
        display: "flex",
        alignItems: "center",
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: "10px 15px",

        "& h6": {
            fontWeight: 800,
            borderRadius: 0,
            fontSize: "20px",
        },

    },
    tweet: {
        cursor: "pointer",
        paddingTop: 15,
        paddingLeft: 20,
        "&:hover": {
            backgroundColor: "rgb(245, 248, 250)",
        },
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetWrapper: {
        color: "inherit",
        textDecoration: "none",
    },
    tweetFooter: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: 450,
        alignItems: "center",
    },
    tweetColorUser: {
        color: grey[500],
    },
    tweetHeaderBackButton: {
        marginRight: 20,
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
        padding: "0 10px"
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    sideProfile: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: 30,
        padding: '10px 15px',
        width: 260,
        borderRadius: 50,
        cursor: 'pointer',

    },
    sideProfileInfo: {
        flex: 1,
        marginLeft: 10,
        '& b': {
            fontSize: 16,
        },
    },
}));