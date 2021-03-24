import React, { useState, useEffect} from 'react';
import { allServices } from '../../../../actions/serviceActions';
import { Container, Grow, Grid } from '@material-ui/core';
import Cards from './Cards/Cards';


const PlumbCarpPaint = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetchAllServices();
    }, []);

    const fetchAllServices = async () => {
        let res = await allServices();
        setServices(res.data);
    }
    console.log(services)

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                    <Grid item xs={12} sm={12}>
                        <Cards services={services}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default PlumbCarpPaint;