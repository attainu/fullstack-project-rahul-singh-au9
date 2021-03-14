import React from 'react';
import {Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import moment from 'moment';


const Profile = () => {
  const classes = useStyles();
  const {auth} = useSelector((state) =>({...state}));
  const {result} = auth;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
          className={classes.purple}
          src={result.ImageUrl}
          >
              {result.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={result.name}
        subheader={`Joined ${moment(result.createdAt).fromNow()}`}
      />
      <CardMedia
        className={classes.media}
        image={result.ImageUrl || "https://i.ibb.co/YyMj1yD/user.webp"}
        title="Paella dish"
      />
      <CardContent>
          <Typography className={classes.userName} variant="h6">
            Name-  {result.name}
          </Typography>

          <Typography className={classes.userName} variant="h6">
            Email-  {result.email}
          </Typography>

          {
            result.city? (
                      <>
                        <Typography className={classes.userName} variant="h6">
                          City-  {result.city}
                        </Typography>

                        <Typography className={classes.userName} variant="h6">
                          Phone Number-  {result.phone}
                        </Typography>
                      </>
            ): null
          }

      </CardContent>
    </Card>
  );
}

export default Profile;