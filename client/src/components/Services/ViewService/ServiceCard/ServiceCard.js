import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button, CardContent, CardMedia, Typography } from '@material-ui/core';
import { currencyFormatter, getSesstionId } from '../../../../actions/stripeAction';
import useStyles from './styles';
import {loadStripe} from '@stripe/stripe-js';

const ServiceCard = ({ service, match }) => {

  const classes = useStyles();
  const history = useHistory();
  const {auth} = useSelector((state) =>({...state}));
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
      e.preventDefault();
      setLoading(true);
      if(!auth) history.push('/auth');

      // console.log(auth.token, match, match.params.serviceId)
      let res = await getSesstionId(auth.token, match.params.serviceId);
      // console.log("GET SESSION RESPONSE ===>", res.data.sessionId);
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
      stripe.redirectToCheckout({
          sessionId: res.data.sessionId
      })
      .then((result) => console.log(result));
  }

    return (
        <Card className={classes.root}>
          {/* <pre> {JSON.stringify(service, null, 4)} </pre> */}
            <CardMedia
              className={classes.cover}
              image={service.image || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
              title={service.title}
            />

            <div className={classes.details} style={{marginLeft: "20px"}}>

                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h4" color="primary">
                      <center>{service.location}</center>
                      <center>
                      {
                      service?.price && currencyFormatter({ amount: service.price * 100, currency: "usd"})
                      }
                      </center>
                    </Typography>

                    <Typography component="p" variant="p" style={{fontSize: '19px'}} >
                        <br/>
                      <center>{service.content}</center>
                    </Typography>

                    <Typography component="h5" variant="h5" color="primary">
                      <br/><center>Available bookings - { service.total}</center>
                    </Typography>

                    <Typography component="h6" variant="h6" color="primary">
                    <br/><center>Available from - {new Date(service.from).toLocaleDateString()}</center>
                    </Typography>

                    <Typography component="h5" variant="h5">
                      <br/><center>Posted By - { service.postedBy}</center>
                    </Typography>

                </CardContent>

              <div className={classes.controls} style={{marginLeft: "290px"}} onClick={handleClick}>
                  <Button color="primary" variant="contained" disabled={loading}>
                      { loading ? "loading..." : auth && auth.token ? "Book Now" : "Log-in to Book"}
                  </Button>
              </div>

            </div>
        </Card>
    );
}

export default ServiceCard;