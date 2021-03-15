import React from 'react'

import { Card , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


import Img from '../images/urbanservicaza.png'
import Rating from './Rating'

const ViewService = ({service}) => {
    return (
        <Card style={{ width: '80vw',height:"auto",marginTop:"20px"}}>
        <Card.Img height="300vh" variant="top" src={Img} />
        <Card.Body style={{display:"inline-flex",flexDirection:"column",textAlign:"center"}} >
          <Card.Title style={{fontWeight:"bolder"}}  > <h2>  Service:{service.title}</h2></Card.Title >
          <Card.Title  style={{fontWeight:"bolder"}} > <h2> Vendor: {service.vendor}    </h2></Card.Title>
          <Rating />
        
          <Card.Text style={{textAlign:"justify",padding:"20px",color:"black"}} >
           {service.body} 
          
          </Card.Text>

          <Link to={`/services/${service.id}/book`} style={{textDecoration:"none"}}>
          <Button style={{alignSelf:"center",margin:"20px",}} variant="dark"> BOOK NOW ! </Button> 
       
          </Link>
        </Card.Body>
      </ Card>
      )
}

export default ViewService
