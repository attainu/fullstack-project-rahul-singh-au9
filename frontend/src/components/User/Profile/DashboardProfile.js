import React from 'react';
import {useSelector} from 'react-redux';
import useStyles from './styles';
import moment from 'moment';
import {Card, Typography, CardContent, Avatar} from '@material-ui/core';


const DashboardProfile = () => {
  const classes = useStyles();
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log(userInfo)
  console.log(process.env)


  return (
    <Card className="classes.rooot" variant="outlined">
      <CardContent>

          <Avatar
          className={ classes.purple }
          src={"result?.ImageUrl"}
          >
              { userInfo.name.charAt(0) }

          </Avatar>

        <Typography variant="h5" component="h2">
          {userInfo.name}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Your breif details
        </Typography>

        <Typography variant="body2" component="p">
          {`Joined - ${moment(userInfo.createdAt).fromNow()}`}
          <br/> <br/>
          {`Email - ${userInfo.email}`}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default DashboardProfile;