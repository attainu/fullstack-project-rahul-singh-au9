import axios from "axios";


// CREATE A NEW SERVICE
export const createService = async (token, data) =>
  await axios.post(
    `${process.env.REACT_APP_API}/create-service`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


// GET ALL THE SERVICES
export const allServices = async () => await axios.get(`${process.env.REACT_APP_API}/services`);


// GET ALL THE SERVICES
export const allServicesWomen = async () => await axios.get(`${process.env.REACT_APP_API}/services/women`);


// GET ALL THE SERVICES
export const allServicesMen = async () => await axios.get(`${process.env.REACT_APP_API}/services/men`);


// GET ALL THE SERVICES
export const allServicesCleaning = async () => await axios.get(`${process.env.REACT_APP_API}/services/CleaningAndPest`);


// GET ALL THE SERVICES
export const allServicesElectricians = async () => await axios.get(`${process.env.REACT_APP_API}/services/Electrians&AC`);


// GET ALL THE SERVICES
export const allServicesPCP = async () => await axios.get(`${process.env.REACT_APP_API}/services/PlumbCarpPaint`);


// GET SINGLE THE SERVICE
export const singleService = async (serviceId) => await axios.get(`${process.env.REACT_APP_API}/service/${serviceId}`);


// SELLER'S SERVICES FOR SELLER'S DASHBOARD
export const sellerServices = async (token, data) =>
  await axios.get(
    `${process.env.REACT_APP_API}/seller-services`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


// DELETE THE SERVICE FOR THE SERVICE OWNER
export const deleteService = async (token, serviceId) =>{
    await axios.delete(`${process.env.REACT_APP_API}/delete-service/${serviceId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
}


// UPDATE A SERVICE
export const updateService = async (token, data, serviceId) =>
  await axios.patch(
    `${process.env.REACT_APP_API}/update-service/${serviceId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


// USER SERVICE BOOKINGS
export const userServiceBookings = async (token) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user-service-bookings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


// ---SEARCH RESULTS---
export const searchListings = async (query) =>
  await axios.post(`${process.env.REACT_APP_API}/search-listings`, query);


// availabe dates
export const diffDays = (from, to) => {
  const day = 24 * 60 * 60 * 1000;
  const start = new Date(from);
  const end = new Date(to);
  const difference = Math.round(Math.abs((start - end) / day));
  return difference;
}