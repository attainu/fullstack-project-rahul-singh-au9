import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import {createService} from '../../actions/serviceActions';
import NewServiceForm from './NewServiceForm';


const NewService = () => {

    const {auth} = useSelector((state) => ({...state}));
    const [values, setValues] = useState({
        title: '',
        content: '',
        image: '',
        price: '',
        from: '',
        to: '',
        options: '',
        total: ''
    });

    const [location, setLocation] = useState("");


    const clear = () => {
        setValues({ title: "", content: "", image: "", price: "", from: "", to: "", options: ""  });
        setLocation("")
    };

    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            let res = await createService(auth.token, {...values, location, postedBy: auth.result.name});
            // console.log("NEW SERVICE ====>", res)
            toast.success("Your New Service is Posted Successfully...")
            clear();
        } catch(err){
            toast.error(err.response.data)
        }

    };

    return (
        <NewServiceForm
        values={values}
        setValues={setValues}
        location={location}
        setLocation={setLocation}
        handleSubmit={handleSubmit}
        clear={clear}
        />

    );
};

export default NewService;