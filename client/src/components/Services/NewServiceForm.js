import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import AlgoliaPlaces from 'algolia-places-react';
import useStyles from './styles';

const config = {
    appId: process.env.REACT_APP_ALGOLIA_APP_ID,
    apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
    language: 'en',
    countries: ['in']
}

const NewServiceForm = (props) => {

    const {values, setValues, location, setLocation, handleSubmit, clear} = props;

    // further destructing values from state
    const {title, content, price, from, to, option, total} = values;

    const classes = useStyles();
    const minDate = new Date(Date.now());

    return (

        <Paper className={classes.paper}>

            <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    Add A New Service
                </Typography>

                <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={title}
                onChange={(e) => setValues({ ...values, title: e.target.value })}
                />

                <TextField
                name="content"
                variant="outlined"
                label="Content"
                fullWidth multiline
                rows={4}
                value={content}
                onChange={(e) => setValues({ ...values, content: e.target.value })}
                />

                <AlgoliaPlaces

                name='location'
                value={location}
                placeholder='Location'
                options={config}
                // onChange = {({suggestion}) => setValues({...values, location: suggestion.value})}
                onChange={({ suggestion }) => setLocation(suggestion.value)}
                style={{ height:"60px" ,width:"1183px", marginTop:"8px" }}
                />

                <TextField
                name="price"
                variant="outlined"
                type="Number"
                label="Price"
                fullWidth
                value={price}
                onChange={(e) => setValues({ ...values, price: e.target.value })}
                />

                <TextField
                name="total"
                variant="outlined"
                type="Number"
                label="Number of bookings"
                fullWidth
                value={total}
                onChange={(e) => setValues({ ...values, total: e.target.value })}
                />

                <TextField
                label="From"
                name="from"
                type="date"
                defaultValue={minDate}
                value={from}
                onChange={(e) => setValues({ ...values, from: e.target.value })}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                />

                <TextField
                label="To"
                name="to"
                type="date"
                value={to}
                onChange={(e) => setValues({ ...values, to: e.target.value })}
                defaultValue={minDate}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                />

                <div className={classes.fileInput}>
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setValues({ ...values, image: base64 })}
                    />
                </div>

                <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
                >
                Submit
                </Button>

                <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={clear}
                fullWidth
                >
                Clear
                </Button>
            </form>
            {/* <pre>{JSON.stringify(values, null, 4)}</pre>
                {JSON.stringify(location)} */}
        </Paper>
    );
};

export default NewServiceForm;