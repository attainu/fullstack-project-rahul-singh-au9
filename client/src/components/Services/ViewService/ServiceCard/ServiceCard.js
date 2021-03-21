import {Card, Button, CardContent, CardMedia, Typography} from '@material-ui/core';
import {currencyFormatter} from '../../../../actions/stripeAction';
import useStyles from './styles';

const ServiceCard = ({ service }) => {

  const classes = useStyles();

    return (
        <Card className={classes.root}>
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
                      service?.price && currencyFormatter({ amount: service.price, currency: "usd"})
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
                      <br/><center>Posted By - { service.createdBy}</center>
                    </Typography>

                </CardContent>

              <div className={classes.controls} style={{marginLeft: "290px"}}>
                  <Button color="primary" variant="contained">Book Now</Button>
              </div>

            </div>
        </Card>
    );
}

export default ServiceCard;