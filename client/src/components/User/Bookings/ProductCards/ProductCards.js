import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import BookingCard from './BookingCard/BookingCard';
import useStyles from "./styles";

const ProductCards = ({bookings}) => {

    const classes = useStyles();

    return (
        !bookings?.length ?
        <CircularProgress style={{marginLeft: '45%', marginTop:'3%'}}/>
        : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {bookings.map((booking) => (

                    <Grid key={booking._id} item xs={12} sm={6} md={6}>
                        <BookingCard booking={booking}/>
                    </Grid>
                ))}

            </Grid>
        )
    );
};

export default ProductCards;
