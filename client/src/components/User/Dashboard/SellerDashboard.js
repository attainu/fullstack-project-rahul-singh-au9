import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Grow, Container, Grid, Button, Typography, CircularProgress } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {createStripeAccount} from '../../../actions/stripeAction';
import {sellerServices, deleteService} from '../../../actions/serviceActions';
import { toast } from 'react-toastify';
import ServiceCard from '../../Services/ServicesHome/Cards/Card/ServiceCard';
import useStyles from "./styles";


const SellerDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    const {auth} = useSelector((state) =>({...state}));
    const classes = useStyles();

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

    const handleServiceDelete = async (serviceId) => {
        if(!window.confirm("Are You Sure ?")) return;

        deleteService(auth.token, serviceId).then((res) =>{
            toast.success("Your Service has been successfully deleted...")
            fetchSellerServices()
        })
    }

    const connected = () => {
        return(
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                <Grid item xs={12} sm={12} style={{display: 'flex'}}>
                    <h1 style={{marginLeft: '30px'}}>Your Services</h1>

                    <Link to='/services/new'>
                        <Button
                        variant="contained"
                        color="primary"
                        style={{marginTop: '26px', marginLeft: '700px'}}
                        >
                        + Add Service
                        </Button>
                    </Link>
                    {/* <pre>{JSON.stringify(services, null, 4)}</pre> */}

                </Grid>

                {
                !services.length ?
                <CircularProgress style={{marginLeft: '45%', marginTop:'3%'}}/>
                : (
                    <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                        {services.map((service) => (

                            <Grid key={service._id} item xs={12} sm={6} md={6}>
                                <ServiceCard
                                service={service}
                                showViewMoreButton={false}
                                owner={true}
                                handleServiceDelete={handleServiceDelete}
                                />
                            </Grid>
                        ))}

                    </Grid>
                )
                }

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
            auth && auth?.result && auth.result.stripe_seller &&
            auth.result.stripe_seller.charges_enabled ? connected() : notConnected()
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
