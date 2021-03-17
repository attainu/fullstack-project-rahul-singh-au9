import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import SettingsIcon from '@material-ui/icons/Settings';
import { payoutSetting } from '../../../actions/stripeAction';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
  root: {
    minWidth: 305,
    minHeight: 212,
    marginLeft: '20px'
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
});

const Payout = () => {

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const {auth} = useSelector((state) =>({...state}));
  const handlePayoutSettings = async () => {

    setLoading(true)
    try {
      const res = await payoutSetting(auth.token)
      console.log("PAYOUT SETTINGS ====>",res);
      // window.location.href = res.data
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error("Unable to access settings. Try again")
    }
  }

  return (
      <Card className={classes.root}>
          <CardContent>

              <SettingsIcon style={{ fontSize: 40, color: deepPurple[500], marginLeft: '107px' }}/>

              <Typography variant="h5" component="h2" style={{ marginLeft: '46px' }}>
                  Payout Settings
              </Typography>
              <br/>

              <CardActions>
                <Button size="small" variant="outlined"
                style={{ fontSize: 20, color: deepPurple[500], marginLeft: '40px' }}
                onClick={handlePayoutSettings}
                >SetUp Payouts</Button>
              </CardActions>
          </CardContent>
      </Card>
  );
}

export default Payout;