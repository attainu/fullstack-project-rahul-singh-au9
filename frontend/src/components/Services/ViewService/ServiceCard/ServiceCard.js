import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button, CardContent, CardMedia, Typography } from '@material-ui/core';
import { currencyFormatter, getSesstionId } from '../../../../actions/stripeAction';
import useStyles from './styles';
import {loadStripe} from '@stripe/stripe-js';

const ServiceCard = ({ service, match }) => {

  const classes = useStyles();
  const history = useHistory();
  const { userInfo } = useSelector((state) =>state.userLogin);
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
      e.preventDefault();

      if(!userInfo || !userInfo.token) {
          history.push('/login')
          return;
      }
      setLoading(true);

      history.push(`/confirm-booking/${match.params.serviceId}`)

      // console.log(auth.token, match, match.params.serviceId)

      
      // let res = await getSesstionId(userInfo.token, match.params.serviceId);
      // console.log("GET SESSION RESPONSE ===>", res.data.sessionId);

      // const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);


      // const stripe = await loadStripe('pk_test_51IY617Duc9iW3uVx93CMdvjRHQjJfQRuUjypYeXUwIFSuOs6Q0HvHaPf42HYj3PcaN7dOKmK9eFkdPtuQiHro75G00g1QOxv55');
      
      // stripe.redirectToCheckout({
      //     sessionId: res.data.sessionId
      // })
      // .then((result) => console.log(result));
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

                <CardContent className={classes.content} xs={12} sm={6} md={4} lg={4} xl={3}>
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
                  <Button color="primary" variant="contained" disabled={loading} xs={12} sm={6} md={4} lg={4} xl={3}>
                      { loading ? "loading..." : userInfo && userInfo.token ? "Book Now" : "Log-in to Book"}
                  </Button>
              </div>

            </div>
        </Card>
    );
}

export default ServiceCard;