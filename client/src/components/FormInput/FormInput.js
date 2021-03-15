import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './style.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = yup.object().shape({
  Name: yup.string().required(),
  email: yup.string().email().required(),
  service: yup.string().required(),
  location: yup.string().required(),
  price: yup.string().required(),
});

export default function FormInput(props) {

  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    const place =props.service.service.locations
  

    if ( place.includes(data.location)) {
      toast.success(`😍Booked Successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        setTimeout(() => {
          history.push('/')
        
      },3000);
      
    } else {
      toast.error('😞BOOKING UNSUCCESFULL!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }) 

        setTimeout(() => {
            history.push('/error')
          
        },3000);
      
    }


        
    
  

  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>

      <label> Name:
      <input  type="text" name="Name"  ref={register} />
      </label>
      <p>{errors.Name?.message}</p>

      <label> Email:
      <input  type="text" name="email"  ref={register} />
      </label>
      <p>{errors.email?.message}</p>

      <label> Service Booked:
      <input defaultValue={props.service.service?.title} type="text" name="service"  ref={register}  readOnly/>
      </label>
      <p>{errors.service?.message}</p>

      <label>Your  Location: 
    
      <input  type="text" name="location" defaultValue={props.value} ref={register}  />
      </label>
      <p>{errors.location?.message}</p>
        

        <label> Price:
      <input  type="text" name="price" defaultValue={props.service.service?.price} ref={register} readOnly />
      </label>
      <p>{errors.age?.message}</p>
      
      <input style={{width:"20vw",alignSelf:"center"}} type="submit" value="Confirm"  />
      <ToastContainer />
    </form>
  );
}

