import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import ProductCard from './Card/ProductCard';
import useStyles from "./styles";

const Cards = ({products}) => {

    const classes = useStyles();

    return (
        !products.length ?
        <CircularProgress style={{marginLeft: '45%', marginTop:'10%'}}/>
        : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {products.map((product) => (

                    <Grid key={product._id} item xs={12} sm={6} md={6}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}

            </Grid>
        )
    );
};

export default Cards;
