import React from 'react'
import { TextField, Button, Typography, Paper, FormControl, Select, InputLabel } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';

const EditServiceForm = (props) => {

    const {values, setValues, handleSubmit, clear} = props;

    // further destructing values from state
    const {title, content, price, from, to, option, total, location} = values;

    const classes = useStyles();
    const minDate = new Date(Date.now());

    return (
        <>
        <h1 style={{marginTop: '18px'}}>
            Add A New Service
        </h1>
        <Paper className={classes.paper}>

            <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
            >

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

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="service">Service Type</InputLabel>
                    <Select
                    name="option"
                    native
                    value={option}
                    onChange={(e) => setValues({ ...values, option: e.target.value })}
                    >
                    <option aria-label="None" value="" />
                    <option value={"Women"}>Salon For Women</option>
                    <option value={"Women"}>Message for Women</option>
                    <option value={"Men"}>Salon For Men</option>
                    <option value={"Men"}>Message for Men</option>
                    <option value={"Electricians"}>Ac Service and Repair</option>
                    <option value={"Painters"}>Painters</option>
                    <option value={"Cleaning"}>Cleaning and disinfection</option>
                    <option value={"Electricians"}>Electricians</option>
                    <option value={"Painters"}>Plumbers</option>
                    <option value={"Painters"}>Carpenters</option>
                    <option value={"Cleaning"}>Pest Control</option>
                    </Select>
                </FormControl>

                {
                location &&
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="service">Location</InputLabel>
                    <Select
                    name='location'
                    value={location}
                    native
                    onChange={(e) => setValues({ ...values, location: e.target.value })}

                    >
                    <option aria-label="None" value="" />
                    <option value={"lucknow"}>Lucknow</option>
                    <option value={"delhi"}>Delhi</option>
                    <option value={"mumbai"}>Mumbai</option>
                    <option value={"hyderabad"}>Hyderabad</option>
                    <option value={"bangalore"}>bangalore</option>
                    </Select>
                </FormControl>
                }

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

                {
                from &&
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
                }

                {
                to &&
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
                }

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
    </>
    );
};

export default EditServiceForm;