import React from 'react';
import {useSelector} from 'react-redux';
import DashboardProfile from './Profile/DashboardProfile';
import Balance from './Balance/Balance';
import Payout from './Payout/Payout';
import { Grow, Container, Grid } from "@material-ui/core";
import useStyles from './styles';
import DashboardNav from './Navbar/DashboardNav';


const Dashboard = () => {
  const classes = useStyles();
  const { userInfo } = useSelector((state) =>({...state}));

  return (
    <>
      <div style={{marginTop: '45px'}}>
        <h1> <center>Your Dashboard</center> </h1>
      </div>
      <Grow in>
          <Container style={{marginTop: '20px'}}>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                    <Grid item xs={12} sm={7}>

                        <Grid container alignItems="stretch" spacing={3} className={classes.left}>

                            <Grid item xs={12} sm={6} md={6} className={classes.flx} >
                                <DashboardProfile/>

                                { userInfo && userInfo.result.stripe_seller &&
                                userInfo.stripe_seller.charges_enabled &&
                                (
                                <>
                                  <Balance/>
                                  <Payout/>
                                </>
                                )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
              </Grid>
              <br/> <br/>
              <DashboardNav/>
          </Container>
      </Grow>
    </>
  )
}
export default Dashboard;
