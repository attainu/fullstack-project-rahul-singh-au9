import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { singleService, updateService } from '../../../actions/serviceActions';
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
    });

    const [location, setLocation] = useState("");

    const clear = () => {
        setValues({ title: "", content: "", image: "", price: "", from: "", to: "", option: "", total: "" })
        setLocation("")
    };

    const fetchSellerService = async () => {
      let res = await singleService(match.params.serviceId);
      setValues({...values, ...res.data})
      setLocation(res.data.location)
    }

    useEffect(() => {
      fetchSellerService()
    }, [])


    const handleSubmit = async (e) => {

        try{
            e.preventDefault()
            let res = await updateService(auth.token, {...values, location}, match.params.serviceId);
            console.log("UPDATED SERVICE ====>", res)
            toast.success(`${values.title} is Edited Successfully...`)
            clear();

        } catch(err){
            toast.error(err.response.data)
        }
    };

    return (
      <>
        <h1>Edit service</h1>
        <EditServiceForm
        values={values}
        setValues={setValues}
        handleSubmit={handleSubmit}
        clear={clear}
        />
        {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
      </>
    )
  }

export default EditService
