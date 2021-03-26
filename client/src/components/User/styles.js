import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

  mainContainer: {
    display: "flex",
    alignItems: "center",
  },

  smMargin: {
    margin: theme.spacing(1),
  },

  actionDiv: {
    textAlign: "center",
  },

  left: {
    marginLeft: "120px"
  },

  flx: {
    display: "flex",
    alignItems: "center",
  }

}));