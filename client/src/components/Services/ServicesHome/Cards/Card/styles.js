import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
    },

    border: {
        border: "solid",
    },

    fullHeightCard: {
        height: "100%",
    },

    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
    },

    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
    },

  overlay2: {
      position: "absolute",
      top: "20px",
      right: "20px",
      color: "white",
  },

  grid: {
      display: "flex",
  },

  details2: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
  },

  title: {
      padding: "0 16px",
  },

  cardActions: {
      padding: "0 16px 8px 16px",
      display: "flex",
      justifyContent: "space-between",
  },

  root: {
      display: 'flex',
      width: 1201,
  },

  details: {
      display: 'flex',
      flexDirection: 'column',
  },

  content: {
      flex: '1 0 auto',
  },

  cover: {
      width: 301,
  },

  controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
  },

  playIcon: {
      height: 38,
      width: 38,
  },

}));
