import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { searchListings } from '../../../actions/serviceActions';
import { Container, Grow, Grid } from '@material-ui/core';
import Cards from '../ServicesHome/Cards/Cards';

const SearchResults = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

      const { location } = queryString.parse(window.location.search)
      // console.table({location, searchValue})

      searchListings({ location }).then(res => {
        // console.log(res.data)
        setServices(res.data)
      })

    },[]);


    return (
      <>
        <h1 style={{marginTop: '25px'}}>SearchResults</h1>
        {/* <pre>{JSON.stringify(services, null, 4)}</pre> */}
        <Grow in>
            <Container style={{marginTop: "25px"}}>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                    <Grid item xs={12} sm={12}>
                        <Cards services={services}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
      </>
    )
}

export default SearchResults
