import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {TextField, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'


const Search = () => {
    const classes = useStyles();
    const [location, setLocation] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
      history.push(`/search-results?location=${location}&searchValue=${searchValue}`)
    }

    return (
      <div>
          <FormControl variant='filled' className={classes.formControl}>
              <InputLabel style={{color: 'white'}}>Location</InputLabel>
              <Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label='Location'
                style={{color: 'white'}}
              >
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'Lucknow'}>Lucknow</MenuItem>
                <MenuItem value={'Delhi'}>Delhi</MenuItem>
                <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
                <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
              </Select>
          </FormControl>

          <TextField
          label='Search for a Service...'
          variant='filled'
          className={classes.root}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{color: 'white'}}
          />

          <SearchIcon
          style={{ fontSize: 44, marginLeft: '4px', marginTop: '5px', color: 'white', cursor: 'pointer' }}
          onClick={handleSubmit}
          />
      </div>
    )
}

export default Search;
