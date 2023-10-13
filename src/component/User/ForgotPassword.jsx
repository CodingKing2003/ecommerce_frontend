import React, { Fragment, useEffect, useState } from 'react'
import './ForgotPassword.css'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import Loader from '../layout/Loader/Loader';
import MetaData from '../MetaData';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { clearErrors, forgotPassword } from '../../redux/actions/userActions';

const ForgotPassword = () => {
    const dispatch=useDispatch();
    const alert=useAlert();
    const { error, message, loading } = useSelector(
        (state) => state.forgotPassword
      );

      const forgotPasswordSubmit=(e)=>{
        e.preventDefault();

        const myForm=new FormData();

        myForm.set("email",email);
        dispatch(forgotPassword(myForm))
      }

      const [email,setEmail]=useState();

      useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(message){
            alert.success(message);
        }

      },[dispatch,message,alert,error])
  return (
    <Fragment>
         {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default ForgotPassword