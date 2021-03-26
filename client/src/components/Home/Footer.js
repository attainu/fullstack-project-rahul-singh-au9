import React from 'react';
import { Typography, Link } from '@material-ui/core';
import useStyles from './styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>

            <Typography variant="h6" align="center" gutterBottom>
                Urban Services
            </Typography>

            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
            </Typography>

            <Copyright />
          </footer>
    )
}

export default Footer
