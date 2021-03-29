import { useEffect, useState } from 'react';
import UseGeoLocation from '../custom-hooks/UseGeoLocation';
import  axios  from 'axios'
import FormInputProduct from '../FormInput/FormInputProduct';
import { singleProduct } from '../../actions/productActions'


const BookingPageProduct = ({match} ) => {
    const location = UseGeoLocation()
    const {lat,lng} = location.coordinates
    const { productId } = match.params
    // console.log("id=======>",productId)
    const [loc, Setloc] = useState("")
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchService();

        location.loaded &&
        axios.get(`https://eu1.locationiq.com/v1/reverse.php?key=pk.8ebd3fa463e76e4a36a9153d39412249&lat=${lat}&lon=${lng}&format=json`)
        .then(res => {
        const address = res.data.address;
        Setloc(address.city ||address.village || address.state_district)
        // console.log(address)
        })
    }, [location, lat, lng, productId])

    const fetchService = async () => {
        let res = await singleProduct(productId);
        setProduct(res.data);
        console.log(res)
    }

    return (
        <div style={{marginTop: '24px'}}>
            <h1 >confirm Your booking</h1>
            <FormInputProduct
            location={loc}
            product ={product}
            />
        </div>
    )
}

export default BookingPageProduct;
