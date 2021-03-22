import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import {Card, Button, CardContent, CardMedia, Typography} from '@material-ui/core';
import {currencyFormatter} from '../../../../../../actions/stripeAction';
// import {diffDays} from '../../../../../actions/serviceActions';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';

const ServiceCard = ({service, handleServiceDelete = (f) => f, owner=false, showViewMoreButton=true}) => {

  const classes = useStyles();
  const history = useHistory();

    return (
      <>
      {
      service.option == ("Electricians" || "Ac Service and Repair") &&

        <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={service.image || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
              title={service.title}
            />

            <div className={classes.details} style={{marginLeft: "20px"}}>

                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" color="primary">
                        {service.title}  {
                          currencyFormatter({
                            amount: service.price,
                            currency: "usd"
                          })
                        }
                    </Typography>

                    <Typography component="h5" variant="h5" color="primary">
                        {service.location}
                    </Typography>

                    <Typography component="p" variant="p" style={{fontSize: '15px', fontWeight: "bold"}}>
                        {`${service.content.substring(0,200)}...`}
                    </Typography>

                    {/* <Typography component="h5" variant="h5">
                        Availabe for {diffDays(service.from, service.to)} {''}
                        {diffDays(service.from, service.to) <= 1 ? 'day': 'days'}
                    </Typography> */}

                    <Typography component="h6" variant="h6" color="primary">
                        Available bookings - { service.total}
                    </Typography>

                    <Typography component="h6" variant="h6">
                        Available from - {new Date(service.from).toLocaleDateString()}
                    </Typography>

                </CardContent>

              <div className={classes.controls} style={{marginLeft: "8px"}}>

                  {
                    showViewMoreButton && (
                      <>
                        <Button color="primary"
                        variant="contained"
                        onClick={() => history.push(`/service/${service._id}`)}
                        >
                          Show more
                        </Button>
                      </>
                    )
                  }

                  {
                    owner && (
                      <>
                        <Link to={`/service/edit/${service._id}`}>
                          <EditIcon
                          color="primary"
                          style={{marginLeft: "600px", cursor: "pointer"}}
                          />
                        </Link>

                        <DeleteIcon
                        color="secondary"
                        style={{marginLeft: "60px", cursor: "pointer"}}
                        onClick={() => handleServiceDelete(service._id)}
                        />
                      </>
                    )
                  }
              </div>

            </div>
        </Card>
      }
    </>
    );
}

export default ServiceCard;