import React, { useState} from 'react'
import { useSelector , useDispatch} from 'react-redux';
// import useStyles from "./styles";
import { Grow, Container, Grid, Button, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {createStripeAccount} from '../../../actions/stripeAction';


const SellerDashboard = () => {
  // const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const {auth} = useSelector((state) =>({...state}));
    const dispatch = useDispatch();

    const handleClick = () => {
        // stripe setUp action
        setLoading(true)
        dispatch(createStripeAccount())
    }

    const connected = () =>{
        return(
        <Grow in>
        <Container>
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

    const notConnected = () => {
        return(
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                <Grid item xs={12}>

                    <HomeIcon style={{ fontSize: 50, marginLeft: '46%' }} color="primary"/>

                    <h3 style={{marginLeft: '34%'}}>Set Up payouts to post your Services</h3>

                    <Typography style={{marginLeft: '25%'}}>
                        Urban Services Partner with Stripe to transfer earnings to your bank
                    </Typography>

                    <Button variant="contained"  color="primary"
                    style={{marginLeft: '42%', marginTop: '15px'}}
                    onClick={handleClick}
                    >
                    {loading? "Processing..." : "Set Up Payouts"}    
                    </Button>

                    <Typography style={{marginLeft: '30%', marginTop: '5px'}}>
                        <small>You will be redirected to Stripe to complete the onboarding Process...</small>
                    </Typography>
                </Grid>

            </Grid>
        </Container>
        </Grow>
        )
    }

    return (
        <>
        {
            auth && auth?.result && auth.result.stripe_seller && auth.result.stripe_seller.charges_enabled ? connected() : notConnected()
        }

        {/* {
            <pre>
                {JSON.stringify(auth, null, 4)}
            </pre>
        } */}
        </>
    )
}

export default SellerDashboard;
