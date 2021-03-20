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
// delete-service/:serviceId

// availabe dates
export const diffDays = (from, to) => {

  const day = 24 * 60 * 60 * 1000;
  const start = new Date(from);
  const end = new Date(to);
  const difference = Math.round(Math.abs((start - end) / day));
  return difference;
}