import {Link} from 'react-router-dom';
import { Grow, Container, Grid, Button } from '@material-ui/core';
import Bookings from '../Bookings/Bookings';


const UserDashboard = () => {
    return (
        // <pre> {JSON.stringify(bookings, null, 4)} </pre>
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                <Grid item xs={12} sm={12} style={{display: 'flex'}}>
                    <h1 style={{marginLeft: '30px'}}>Your Bookings</h1>

                    <Link to='/'>
                        <Button
                        variant="contained"
                        color="primary"
                        style={{marginTop: '26px', marginLeft: '700px'}}
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
