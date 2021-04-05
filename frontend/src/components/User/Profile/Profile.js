import React from 'react';
import {Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import moment from 'moment';


const Profile = () => {
  const classes = useStyles();
  const { userInfo } = useSelector( state => state.userLogin )


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
          className={classes.purple}
          src="result.ImageUrl"
          >
         { userInfo.name }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ userInfo.name }
        subheader={`Joined ${moment(userInfo.createdAt).fromNow()}`}
      />
      <CardMedia
        className={classes.media}
        image={ userInfo.ImageUrl || "https://i.ibb.co/YyMj1yD/user.webp"}
        title="Paella dish"
      />
      <CardContent>
          <Typography className={ classes.userName } variant="h6">
            Name-  {userInfo.name}
          </Typography>

          <Typography className={classes.userName} variant="h6">
            Email-  { userInfo.email }
          </Typography>

          {
            userInfo.city? (
                      <>
                        <Typography className={classes.userName} variant="h6">
                          City-  {userInfo.city}
                        </Typography>

                        <Typography className={classes.userName} variant="h6">
                          Phone Number-  {"result.phone"}
                        </Typography>
                      </>
            ): null
          }

      </CardContent>
    </Card>
  );
}

export default Profile;