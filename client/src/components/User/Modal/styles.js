import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid blue',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 6, 5),
    },

}));