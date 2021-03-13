import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    icon: {
      marginRight: theme.spacing(2),
    },

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      backgroundImage: `url(${"https://i.ibb.co/2j7k3fr/urbanservices.jpg"})`,
      backgroundSize: 'cover',
      minHeight: '380px'
    },

    heroButtons: {
      marginTop: theme.spacing(4),
    },

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },

    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },

    cardContent: {
      flexGrow: 1,
    },

    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}))