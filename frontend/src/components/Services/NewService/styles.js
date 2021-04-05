import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
  },

  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  fileInput: {
    width: "97%",
    margin: "10px 0",
  },

  buttonSubmit: {
    marginBottom: 10,
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));