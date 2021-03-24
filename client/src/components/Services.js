import React from "react";

import ServiceListItem from "./ServiceListItem";




const Services = ({ services }) => {
  return (
    <div style={{ width:"100%",height:"100vh", display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-between"}} >
   
      {services?.map(service=> (
        <ServiceListItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
