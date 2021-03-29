import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import {Card, Button, CardContent, CardMedia, Typography} from '@material-ui/core';
import {currencyFormatter} from '../../../../../actions/stripeAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';

const ProductCard = ({product, handleProductDelete = (f) => f, owner=false, showViewMoreButton=true}) => {

  const classes = useStyles();
  const history = useHistory();

    return (
        <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={product.image || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
              title={product.title}
            />

            <div className={classes.details} style={{marginLeft: "20px"}}>

                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" color="primary">
                        {product.title} <br/> {
                          currencyFormatter({
                            amount: product.price * 100,
                            currency: "usd"
                          })
                        }
                    </Typography>
                    <br/>
                    <Typography component="p" variant="p" style={{fontSize: '15px', fontWeight: "bold"}}>
                        {`${product.content.substring(0,200)}...`}
                    </Typography>

                </CardContent>

              <div className={classes.controls} style={{marginLeft: "8px"}}>

                  {
                    showViewMoreButton && (
                      <>
                        <Button color="primary"
                        variant="contained"
                        onClick={() => history.push(`/product/${product._id}`)}
                        >
                          Show more
                        </Button>
                      </>
                    )
                  }

                  {
                    owner && (
                      <>
                        <Link to={`/product/edit/${product._id}`}>
                          <EditIcon
                          color="primary"
                          style={{marginLeft: "600px", cursor: "pointer"}}
                          />
                        </Link>

                        <DeleteIcon
                        color="secondary"
                        style={{marginLeft: "60px", cursor: "pointer"}}
                        onClick={() => handleProductDelete(product._id)}
                        />
                      </>
                    )
                  }
              </div>

            </div>
        </Card>
    );
}

export default ProductCard;