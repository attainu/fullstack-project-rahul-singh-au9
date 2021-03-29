import {useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import { getSesstionIdProduct } from '../../actions/stripeAction';
import { TextField, Button, Paper } from '@material-ui/core';
import useStyles from './styles';

const BookingProductForm = ({product, location}) => {

    const {auth} = useSelector((state) =>({...state}));
    const history = useHistory()
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!auth || !auth.token) {
            history.push('/auth')
            return;
        }
        setLoading(true);

        // console.log(auth.token, product._id)
        let res = await getSesstionIdProduct(auth.token, product._id);
        // console.log("GET SESSION RESPONSE ===>", res.data.sessionId);

        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);

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
                value={product.title}
                />

                <TextField
                name="name"
                variant="outlined"
                label="Name"
                fullWidth
                value={auth.result.name}
                />

                <TextField
                name="email"
                variant="outlined"
                label="Email"
                fullWidth
                defaultValue={auth.result.email}
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
                value={`$${product.price}`}
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
                : auth && auth.token ? " Checkout" : "Log-in to Book"}
                </Button>

            </form>
        </Paper>
    );
};

export default BookingProductForm;
