import React, { useState, useEffect} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Cards from './Cards/Cards';
import {useSelector} from 'react-redux';
import {userServiceBookings} from '../../../actions/serviceActions';


const Bookings = () => {
    const [bookings, setBookings] = useState();
    const {auth} = useSelector((state) =>({...state}));

    const fetchUserBookings = async () => {
        const res = await userServiceBookings(auth.token)
        // console.log(res.data)
        setBookings(res.data)
    };

    useEffect(() => {
        fetchUserBookings()
    }, []);

    return (
        <Grow in>
            <Container style={{marginTop: "45px"}}>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                    <Grid item xs={12} sm={12}>
                        <Cards bookings={bookings}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Bookings;