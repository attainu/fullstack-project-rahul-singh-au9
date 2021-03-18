import React from 'react';
import {Card, Button, CardContent, CardMedia, Typography} from '@material-ui/core';
import {currencyFormatter} from '../../../../../actions/stripeAction';
import {diffDays} from '../../../../../actions/serviceActions';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';

export default function ServiceCard2({service}) {
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
                    <Typography component="h5" variant="h5">
                        {service.title}  {
                          currencyFormatter({
                            amount: service.price,
                            currency: "usd"
                          })
                        }
                    </Typography>

                    <Typography component="h5" variant="h5">
                        {service.location}
                    </Typography>

                    <Typography component="h5" variant="h5">
                        {`${service.content.substring(0,200)}...`}
                    </Typography>

                    <Typography component="h5" variant="h5">
                        Availabe for {diffDays(service.from, service.to)} {''}
                        {diffDays(service.from, service.to) <= 1 ? 'day': 'days'}
                    </Typography>

                    <Typography component="h5" variant="h5">
                        Available bookings { service.total}
                    </Typography>

                    <Typography component="h5" variant="h5">
                        Available from {new Date(service.from).toLocaleDateString()}
                    </Typography>

                </CardContent>

              <div className={classes.controls} style={{marginLeft: "8px"}}>

                  <Button color="primary" variant="contained">
                    Show more
                  </Button>

                  <EditIcon color="primary" style={{marginLeft: "550px"}}/>

                  <DeleteIcon color="secondary" style={{marginLeft: "80px"}}/>

              </div>

            </div>

        </Card>
    );
}