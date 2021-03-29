import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button, CardContent, CardMedia, Typography } from '@material-ui/core';
import { currencyFormatter } from '../../../../actions/stripeAction';
import useStyles from './styles';

const ProductCard = ({ product, match }) => {

  const classes = useStyles();
  const history = useHistory();
  const {auth} = useSelector((state) =>({...state}));
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
      e.preventDefault();

      if(!auth || !auth.token) {
          history.push('/auth')
          return;
      }
      setLoading(true);
      history.push(`/confirm-booking-product/${match.params.productId}`)
  }

    return (
        <Card className={classes.root}>
          {/* <pre> {JSON.stringify(product, null, 4)} </pre> */}
            <CardMedia
              className={classes.cover}
              image={product.image || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
              title={product.title}
            />

            <div className={classes.details} style={{marginLeft: "20px"}}>

                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h4" color="primary">
                      <center>
                      {
                      product?.price && currencyFormatter({ amount: product.price * 100, currency: "usd"})
                      }
                      </center>
                    </Typography>

                    <Typography component="p" variant="p" style={{fontSize: '19px'}} >
                        <br/>
                      <center>{product.content}</center>
                    </Typography>

                    <Typography component="h5" variant="h5" color="primary">
                      <br/><center>Posted By - { product.postedBy}</center>
                    </Typography>

                </CardContent>

              <div className={classes.controls} style={{marginLeft: "290px"}} onClick={handleClick}>
                  <Button color="primary" variant="contained" disabled={loading}>
                      { loading ? "loading..." : auth && auth.token ? "Buy Now" : "Log-in to Buy"}
                  </Button>
              </div>
            </div>
        </Card>
    )
}

export default ProductCard;