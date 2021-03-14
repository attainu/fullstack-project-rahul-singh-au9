import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


export default makeStyles((theme) => ({

    root: {
    maxWidth: 345,
    },

    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

  userName: {
    display: 'flex',
    alignItems: 'center',
  },

    avatar: {
      backgroundColor: red[500],
    },

}));