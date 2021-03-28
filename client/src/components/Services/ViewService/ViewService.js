import React, { useState, useEffect } from 'react';
import { singleService } from '../../../actions/serviceActions';
import {Card, Grid, Container, Grow} from '@material-ui/core';
import ServiceCard from './ServiceCard/ServiceCard';


const ViewService = ({match}) => {

    const [service, setService] = useState({});

    useEffect(() => {
        fetchService();
    }, [])

    const fetchService = async () => {
        let res = await singleService(match.params.serviceId);
        setService(res.data);
    }

    return (
        <Card style={{minHeight: '600px', paddingTop: '20px'}}>
            <div>
                <h1><center> {service.title} </center></h1>
            </div>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                        <Grid item xs={12} sm={12} md={12} >
                            <ServiceCard service={service} match={match} />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
        </Card>
    )
}

export default ViewService;
