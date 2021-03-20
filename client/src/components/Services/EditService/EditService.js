import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { singleService } from '../../../actions/serviceActions';
import EditServiceForm from './EditServiceForm';

const EditService = ({match}) => {

    const {auth} = useSelector((state) => ({...state}));

    const [values, setValues] = useState({
        title: '',
        content: '',
        image: '',
        price: '',
        from: '',
        to: '',
        option: '',
        total: '',
        location: ''
    });

    const clear = () => {
        setValues({ title: "", content: "", image: "", price: "", from: "", to: "", option: "", total: "", location: "" });
    };

    const fetchSellerService = async () => {
      let res = await singleService(match.params.serviceId);
      setValues({...values, ...res.data})
    }

    useEffect(() => {
      fetchSellerService()
    }, [])


    // const handleSubmit = async (e) => {
    //     try{
    //         e.preventDefault()
    //         let res = await createService(auth.token, {...values, location, postedBy: auth.result.email});
    //         // console.log("NEW SERVICE ====>", res)
    //         toast.success("Your New Service is Posted Successfully...")
    //         clear();
    //     } catch(err){
    //         toast.error(err.response.data)
    //     }

    // };

    return (
      <>
        <h1>Edit service</h1>
        <EditServiceForm
        values={values}
        setValues={setValues}
        // handleSubmit={handleSubmit}
        clear={clear}
        />
        {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
      </>
    )
  }

export default EditService
