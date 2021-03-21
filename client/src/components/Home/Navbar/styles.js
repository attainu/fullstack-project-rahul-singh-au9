import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({


  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },

  image: {
    marginLeft: '15px',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '450px',
  },

  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '450px',
  },

  userName: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },

  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  purple: {
    color: 'white',
    backgroundColor: deepPurple[500],
  },

  dashClr:{
    color: 'white'
  },

}));