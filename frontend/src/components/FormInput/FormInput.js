import React,{useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import { getSesstionId } from '../../actions/stripeAction';
import { TextField, Button, Paper } from '@material-ui/core';
import useStyles from './styles';

const BookingServiceForm = ({service, location}) => {

    const { userInfo } = useSelector((state) =>state.userLogin);
    const history = useHistory()
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!userInfo || !userInfo.token) {
            history.push('/login')
            return;
        }
        setLoading(true);

        // console.log(auth.token, service._id)
        let res = await getSesstionId(userInfo.token, service._id);
        console.log("GET SESSION RESPONSE ===>", res.data.sessionId);

        const stripe = await loadStripe(`pk_test_51IY617Duc9iW3uVx93CMdvjRHQjJfQRuUjypYeXUwIFSuOs6Q0HvHaPf42HYj3PcaN7dOKmK9eFkdPtuQiHro75G00g1QOxv55`);

        stripe.redirectToCheckout({
            sessionId: res.data.sessionId
        })
        .then((result) => console.log(result));
    }

    return (

        <Paper className={classes.paper}>

            <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
            >

                <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={service.title}
                />

                <TextField
                name="name"
                variant="outlined"
                label="Name"
                fullWidth
                value={userInfo.name}
                />

                <TextField
                name="email"
                variant="outlined"
                label="Email"
                fullWidth
                defaultValue={userInfo.email}
                />

                <TextField
                name="location"
                variant="outlined"
                label="Location"
                fullWidth
                value={location}
                />

                <TextField
                name="price"
                variant="outlined"
                // type="Number"
                label="Price"
                fullWidth
                value={`$${service.price}`}
                />

                <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
                >
                { loading ? "loading..."
                : userInfo && userInfo.token ? " Checkout" : "Log-in to Book"}
                </Button>

            </form>
        </Paper>
    );
};

export default BookingServiceForm;