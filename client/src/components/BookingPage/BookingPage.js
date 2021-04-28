import { useEffect, useState } from 'react';
import UseGeoLocation from '../custom-hooks/UseGeoLocation';
import  axios  from 'axios'
import FormInput from '../FormInput/FormInput';
import {singleService} from '../../actions/serviceActions'


const BookingPage = ({match} ) => {
    const location = UseGeoLocation()
    const {lat,lng} = location.coordinates
    const { serviceId } = match.params
    const [loc, Setloc] = useState("")
    const [service, setService] = useState({});

    useEffect(() => {
        fetchService();

        location.loaded &&
        axios.get(`https://eu1.locationiq.com/v1/reverse.php?key=pk.8ebd3fa463e76e4a36a9153d39412249&lat=${lat}&lon=${lng}&format=json`)
        .then(res => {
        const address = res.data.address;
        Setloc(address.city ||address.village || address.state_district)
        console.log(address)
        })
    }, [location, lat, lng, serviceId])

    const fetchService = async () => {
        let res = await singleService(serviceId);
        setService(res.data);
        console.log(res.data)
    }

    return (
        <div style={{marginTop: '24px'}}>
            <h1 >confirm Your booking</h1>
            <FormInput
            location={loc}
            service ={service}
            />
        </div>
    )
}

export default BookingPage;
