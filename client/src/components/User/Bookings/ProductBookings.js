import React, { useState, useEffect} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import ProductCards from './ProductCards/ProductCards';
import {useSelector} from 'react-redux';
import {userProductBookings} from '../../../actions/productActions';


const Bookings = () => {
    const [bookings, setBookings] = useState();
    const {auth} = useSelector((state) =>({...state}));

    const fetchUserBookings = async () => {
        const res = await userProductBookings(auth.token)
        // console.log(res.data)
        setBookings(res.data)
    };

    useEffect(() => {
        fetchUserBookings()
    }, []);

    return (
        <Grow in style={{marginTop: '10px'}}>
            <Grid item xs={12} sm={12}>
                <ProductCards bookings={bookings}/>
            </Grid>
        </Grow>
    )
}

export default Bookings;