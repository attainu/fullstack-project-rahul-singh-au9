import React from 'react'
import { Grid, Button, Typography, Container, Card, CardActions, CardMedia, CardContent, } from '@material-ui/core';
import useStyles from '../styles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Cards = () => {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">

            <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>

                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />

                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Service Title
                            </Typography>

                            <Typography>
                                Service disctiption. You can use this section to describe the content.
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small" color="primary">
                                Book Now
                            </Button>

                            <Button size="small" color="primary">
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
          </Grid>
      </Container>
  )
}

export default Cards
