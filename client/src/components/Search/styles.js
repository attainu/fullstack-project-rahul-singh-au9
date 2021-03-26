import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

  root: {
    '& > *': {
      // margin: theme.spacing(1),
      width: '55ch',
      marginLeft: '10px',
      color: 'white'
    },
  },
  formControl: {
    minWidth: 200,
    color: 'white'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));