import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {currencyFormatter} from '../../../../../actions/stripeAction';
// import {diffDays} from '../../../../../actions/serviceActions';
import useStyles from './styles';
import BookingModal from '../../../Modal/BookingModal';

const BookingCard = ({ booking }) => {
    // further destructing values from state
    const { Service, orderedBy, session } = booking;
    const classes = useStyles();
    // console.log("Service===>", Service)

    return (
        <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={Service.image || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
              title={Service.title}
            />

            <div className={classes.details} style={{marginLeft: "20px"}}>

                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" color="primary">
                        {Service.title}  {
                          currencyFormatter({
                            amount: Service.price * 100,
                            currency: "usd"
                          })
                        }
                    </Typography>

                    <Typography component="h5" variant="h5" color="primary">
                        {Service.location}
                    </Typography>

                    <Typography component="p" variant="p" style={{fontSize: '15px', fontWeight: "bold"}}>
                        {`${Service.content?.substring(0,200)}...`}
                    </Typography>

                    {/* <Typography component="h5" variant="h5">
                        Availabe for {diffDays(Service.from, Service.to)} {''}
                        {diffDays(Service.from, Service.to) <= 1 ? 'day': 'days'}
                    </Typography> */}

                    <Typography component="h6" variant="h6" color="primary">
                        Available Bookings - { Service.total}
                    </Typography>

                    <Typography component="h6" variant="h6">
                        Available from - {new Date(Service.from).toLocaleDateString()}
                    </Typography>

                </CardContent>

              <div className={classes.controls} style={{marginLeft: "8px"}}>

                  <BookingModal orderedBy={orderedBy} session={session}/>
              </div>

            </div>
        </Card>
    );
}

export default BookingCard;