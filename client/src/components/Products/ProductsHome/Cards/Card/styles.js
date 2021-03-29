import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    root: {
        display: 'flex',
        width: 1100,
        marginLeft: '40px',
        border: "1px gray solid",
        minHeight: '220px',
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
    },

    content: {
        flex: '1 0 auto',
    },

    cover: {
        minWidth: 301,
    },

    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },

}));
