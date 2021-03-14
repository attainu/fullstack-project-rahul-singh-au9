import React from 'react';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import moment from 'moment';
import {Card, Typography, CardContent, Avatar} from '@material-ui/core';

const useStyles = makeStyles({

  root: {
    minWidth: 305,
    minHeight: 212
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  avatar: {
    backgroundColor: purple[500],
  },
});

export default function DashboardProfile() {
  const classes = useStyles();
  const {auth} = useSelector((state) =>({...state}));
  const {result} = auth;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

          <Avatar
          className={classes.avatar}
          src={result.ImageUrl}
          >
              {result.name.charAt(0)}

          </Avatar>

        <Typography variant="h5" component="h2">
          {result.name}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Your breif details
        </Typography>

        <Typography variant="body2" component="p">
          {`Joined - ${moment(result.createdAt).fromNow()}`}
          <br/> <br/>
          {`Email - ${result.email}`}
        </Typography>

      </CardContent>
    </Card>
  );
}