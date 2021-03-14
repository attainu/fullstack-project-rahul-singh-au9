import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

    root: {
    maxWidth: 345,
    marginLeft: '455px'
    },

    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

    userName: {
      display: 'flex',
      alignItems: 'center',
    },

    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },

    rooot: {
    minWidth: 305,
    minHeight: 212
    },

    title: {
      fontSize: 14,
    },

    pos: {
      marginBottom: 12,
    },

}));