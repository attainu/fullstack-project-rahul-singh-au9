import React, { useState, useEffect } from 'react';
import { singleProduct } from '../../../actions/productActions';
import {Card, Grid, Container, Grow} from '@material-ui/core';
import ProductCard from './ProductCard/ProductCard';


const ViewProduct = ({match}) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProduct();
    }, [])

    const fetchProduct = async () => {
        let res = await singleProduct(match.params.productId);
        setProduct(res.data);
    }

    return (
        <Card style={{minHeight: '480px', paddingTop: '20px', marginTop: '30px'}}>
            <div>
                <h1><center> {product.title} </center></h1>
            </div>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                        <Grid item xs={12} sm={12} md={12} >
                            <ProductCard product={product} match={match} />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
        </Card>
    )
}

export default ViewProduct;
