import React from 'react'
import Dashboard from '../Dashboard';
import useStyles from "./styles";
import { Grow, Container, Grid, Button } from "@material-ui/core";



const SellerDashboard = () => {
  // const classes = useStyles();

  return (
      <Grow in>
      <Container>
          <Dashboard/>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>

              <Grid item xs={12} sm={7}>
                  <h1>Your Services</h1>
              </Grid>

              <Grid item xs={12} sm={4}>
                  <Button variant="contained"  color="primary" >
                      + Add Service
                  </Button>
              </Grid>

          </Grid>
      </Container>
    </Grow>
  )
}

export default SellerDashboard
