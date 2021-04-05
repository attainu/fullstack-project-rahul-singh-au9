import React from 'react'
import {Link} from 'react-router-dom';
import { Grow, Container, Grid, Button, Typography } from '@material-ui/core';
import Bookings from '../Bookings/Bookings';


const UserDashboard = () => {
    return (
        // <pre> {JSON.stringify(bookings, null, 4)} </pre>
        <Grow in>
        <Container  component={'span'}>
            <Grid   component={'span'} container justify="space-between" alignItems="stretch" >

                <Grid  component={'span'}  item xs={12} sm={12} style={{display: 'flex'}}>

                
                    <span style={{marginLeft: '30px'}}>Your Bookings</span>
                    

                    <Link to='/'>
                        <Button
                        variant="contained"
                        color="primary"
                        style={{marginTop: '8px', marginLeft: '700px'}}
                        >
                        Browse Services
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Bookings/>

        </Container>
        </Grow>
    )
}

export default UserDashboard
