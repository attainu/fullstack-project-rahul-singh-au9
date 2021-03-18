import React from 'react';
import {AppBar, Typography, Container, CssBaseline, Link, LinearProgress} from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import Cards from './Card/Card'
import Footer from './Footer'
import useStyles from './styles';
import ServiceHome from '../Services/ServicesHome/Home'

const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
          <CssBaseline />

          <ServiceHome/>

          <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">

                    <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    noWrap>
                      Home Services, on demand.
                    </Typography>

                    <div className="searchbar">
                      <SearchBar
                        // onRequestSearch={appStore.fetchBeers}
                        placeholder="Search for a Service ..."
                        autoFocus
                      />
                      {/* {appStore.isLoading && <LinearProgress />} */}
                    </div>

                    <Typography>
                      <Link>Plumber</Link>
                      <Link>Carpenters</Link>
                      <Link>Pest Control</Link>
                      etc
                    </Typography>
                </Container>
            </div>
          <Cards/>
        </main>
          <Footer/>
      </React.Fragment>
    );
}

export default Home;