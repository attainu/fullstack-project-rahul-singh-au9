import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getAccountStatus} from '../../../actions/stripeAction';

const StripeCallback = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

    const accountStatus = async () => {
    try {
      const res = await getAccountStatus(auth.token);
      console.log("USER ACCOUNT STATUS ON STRIPE CALLBACK", res);
    } catch (err) {
      console.log(err);
    }
  };

  return(
  <>
    <div style={{marginLeft: '48%', marginTop: '12%'}}>
      <CircularProgress disableShrink />
    </div>
  </>
  )
}
export default StripeCallback