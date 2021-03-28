import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import {getAccountBalance, currencyFormatter} from '../../../actions/stripeAction';

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

const Balance = () => {
  const classes = useStyles();
  const {auth} = useSelector((state) =>({...state}));
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      console.log(res)
      setBalance(res.data)
    })
  },[auth.token])


  return (
      <Card className={classes.root}>
          <CardContent>

              <AccountBalanceWalletIcon style={{ fontSize: 40, color: deepPurple[500], marginLeft: '100px' }}/>

              <Typography variant="h5" component="h2" style={{ marginLeft: '30px' }}>
                  Available Balance
              </Typography>
              <br/>

              <Typography variant="body2" component="p" style={{ marginLeft: '40px' }}>
                  {
                    balance && balance.pending && balance.pending.map((ba, i ) =>(
                      <span key={i} style={{fontSize: 35}}>
                        {currencyFormatter(ba)}
                      </span>
                    ))
                  }
              </Typography>
          </CardContent>
      </Card>
  );
}

export default Balance;