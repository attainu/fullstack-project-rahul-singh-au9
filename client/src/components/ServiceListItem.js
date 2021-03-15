

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Img from '../images/urbanservicaza.png'

const ServiceListItem = ({service}) => {
    return (
        
        <Card style={{ width:"10vw",backgroundColor:"black", color:"white",margin:"100px",height:"30vh" }}>
            <Link   to={`/services/${service.id }`} 
            style={{ color: "inherit", textDecoration: "none" }}>
                <Card.Img height="100vh" style={{width:"100%"}} variant="top" src={ Img } />
                    <Card.Body style={{textAlign:"center"}} >
                    <Card.Title style={{fontSize:"1rem"}} >{service.title}</Card.Title>
                    <Card.Title style={{fontSize:"1rem"}}>{service.price}</Card.Title>

                   
                    </Card.Body>
            </Link>
        </Card>
    )
}

export default ServiceListItem
