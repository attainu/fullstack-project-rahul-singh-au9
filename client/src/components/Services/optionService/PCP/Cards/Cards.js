import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import ServiceCard from './Card/ServiceCard';
import useStyles from "./styles";

const Cards = ({services}) => {

    const classes = useStyles();

    return (
        !services.length ?
        <CircularProgress style={{marginLeft: '45%', marginTop:'10%'}}/>
        : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {services.map((service) => (

                    <Grid key={service._id} item xs={12} sm={6} md={6}>
                        <ServiceCard service={service}/>
                    </Grid>
                ))}

            </Grid>
        )
    );
};

export default Cards;
