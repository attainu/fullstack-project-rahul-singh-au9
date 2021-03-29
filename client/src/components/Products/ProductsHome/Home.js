import React, { useState, useEffect} from 'react';
import { allProducts } from '../../../actions/productActions';
import { Container, Grow, Grid } from '@material-ui/core';
import Cards from './Cards/Cards';


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = async () => {
        let res = await allProducts();
        setProducts(res.data);
    }

    return (
        <Grow in>
            <Container style={{marginTop: "45px"}}>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                    <Grid item xs={12} sm={12}>
                        <Cards products={products}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
