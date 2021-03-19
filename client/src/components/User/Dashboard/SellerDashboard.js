import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Grow, Container, Grid, Button, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {createStripeAccount} from '../../../actions/stripeAction';
import {sellerServices} from '../../../actions/serviceActions';
import { toast } from 'react-toastify';


const SellerDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    const {auth} = useSelector((state) =>({...state}));

    const fetchSellerServices = async () => {
        let {data} = await sellerServices(auth.token);
        setServices(data)
    }

    useEffect(() => {
        fetchSellerServices()
    },[])



    const handleClick = async () => {
        setLoading(true);
        try {
        let res = await createStripeAccount(auth.token);
        console.log(res); // get login link
        window.location.href = res.data;

        } catch (err) {
        console.log(err);
        toast.error("Stripe connect failed, Try again.");
        setLoading(false);
        }
    };

    const connected = () =>{
        return(
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                <Grid item xs={12} sm={7}>
                    <h1>Your Services</h1>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Link to='/services/new'>
                        <Button variant="contained"  color="primary" >
                                + Add Service
                        </Button>
                    </Link>
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
                    {loading? "Click again..." : "Set Up Payouts"}
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
            auth && auth?.result && auth.result.stripe_seller ? connected() : notConnected()
        }

        {/* {
            <pre>
                {JSON.stringify(auth, null, 4)}
            </pre>
        } */}
        </>
    )
}
// auth.result.stripe_seller.charges_enabled &&
export default SellerDashboard;
