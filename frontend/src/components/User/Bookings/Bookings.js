import React, { useState, useEffect} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Cards from './Cards/Cards';
import {useSelector} from 'react-redux';
import {userServiceBookings} from '../../../actions/serviceActions';


const Bookings = () => {
    const [bookings, setBookings] = useState();
    const { userInfo } = useSelector((state) => state.userLogin);
    console.log(userInfo.token)

    const fetchUserBookings = async () => {
        const res = await userServiceBookings(userInfo.token)
        console.log(res.data)
        setBookings(res.data)
    };

    useEffect(() => {
        fetchUserBookings()
    }, []);

    return (
        <Grow   in>
            <Container  component={'span'} style={{marginTop: "45px"}}>
                <Grid  component={'span'} container justify="space-between" alignItems="stretch" spacing={3}>

                    <Grid   component={'span'} item xs={12} sm={12}>
                        <Cards bookings={bookings}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Bookings;