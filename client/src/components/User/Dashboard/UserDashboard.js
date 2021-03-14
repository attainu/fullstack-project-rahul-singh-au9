import React from 'react'
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard';
import useStyles from "./styles";
import { Grow, Container, Grid, Button } from "@material-ui/core";


const UserDashboard = () => {
  // const classes = useStyles();
  return (
      <Grow in>
      <Container>
          <Dashboard/>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>

              <Grid item xs={12} sm={7}>
                    <h1> Your Bookings </h1>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Link to='/'>
                  <Button variant="contained"  color="primary" >
                      Browse Services
                  </Button>
                </Link>
              </Grid>

          </Grid>
      </Container>
    </Grow>
  )
}

export default UserDashboard
