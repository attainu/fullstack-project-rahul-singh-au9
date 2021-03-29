import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {currencyFormatter} from '../../../../../actions/stripeAction';
import useStyles from './styles';
import BookingModal from '../../../Modal/BookingModal';

const BookingCard = ({ booking }) => {
    // further destructing values from state
    const { Product, orderedBy, session } = booking;
    const classes = useStyles();
    // console.log("Product===>", Product)

    return (
        <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={Product.image || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
              title={Product.title}
            />

            <div className={classes.details} style={{marginLeft: "20px"}}>

                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" color="primary">
                        {Product.title}  {
                          currencyFormatter({
                            amount: Product.price * 100,
                            currency: "usd"
                          })
                        }
                    </Typography>

                    <Typography component="h5" variant="h5" color="primary">
                        {Product.location}
                    </Typography>

                    <Typography component="p" variant="p" style={{fontSize: '15px', fontWeight: "bold"}}>
                        {`${Product.content?.substring(0,200)}...`}
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