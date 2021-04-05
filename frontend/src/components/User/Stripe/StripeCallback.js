import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getAccountStatus} from '../../../actions/stripeAction';
import {updateUserInLocalStorage} from '../../../actions/authActions';
import {AUTH} from '../../../constants/actionTypes'

const StripeCallback = () => {
  const { userInfo } = useSelector((state) =>state.userLogin);
  const dispatch = useDispatch();

    useEffect(() => {
      if (userInfo && userInfo.token) accountStatus();
    }, []);

    const accountStatus = async () => {
      try {
        const res = await getAccountStatus(userInfo.token);
        // console.log("USER ACCOUNT STATUS ON STRIPE CALLBACK", res);
        // update user in local storage
        updateUserInLocalStorage(res.data, () => {
          // update user in redux
          dispatch({
            type: AUTH,
            payload: res.data,
          });
          // redirect user to dashboard
          window.location.href = "/dashboard";
        });
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