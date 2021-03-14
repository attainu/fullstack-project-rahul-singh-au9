import React from 'react';
import {useSelector} from 'react-redux';
import useStyles from './styles';
import moment from 'moment';
import {Card, Typography, CardContent, Avatar} from '@material-ui/core';


const DashboardProfile = () => {
  const classes = useStyles();
  const {auth} = useSelector((state) =>({...state}));
  const {result} = auth;

  return (
    <Card className={classes.rooot} variant="outlined">
      <CardContent>

          <Avatar
          className={classes.purple}
          src={result?.ImageUrl}
          >
              {result.name.charAt(0)}

          </Avatar>

        <Typography variant="h5" component="h2">
          {result?.name}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Your breif details
        </Typography>

        <Typography variant="body2" component="p">
          {`Joined - ${moment(result.createdAt).fromNow()}`}
          <br/> <br/>
          {`Email - ${result?.email}`}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default DashboardProfile;