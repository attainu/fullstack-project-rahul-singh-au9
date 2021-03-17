import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import {toast} from 'react-toastify';
import AlgoliaPlaces from 'algolia-places-react';
import useStyles from "./styles";

const config = {
    appId: process.env.REACT_APP_ALGOLIA_APP_ID,
    apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
    language: 'en',
    countries: ['au']
}

const NewService = () => {

    const classes = useStyles();

    const [values, setValues] = useState({
        title: '',
        content: '',
        location: '',
        image: '',
        price: '',
        from: '',
        to: '',
        options: '',
        total: ''
    });

    // destructing values from state
    const {title, content, location, image, price, from, to, option, total} = values;

    const clear = () => {
        setValues({ title: "", content: "", location: "", image: "", price: "", from: "", to: "", options: ""  });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        clear();
    };

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

                <AlgoliaPlaces defaultValue={location} placeholder='Location' options={config}
                onChange = {({suggestion}) => setValues({...values, location: suggestion.value})}/>

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
        </Paper>
    );
};

export default NewService;