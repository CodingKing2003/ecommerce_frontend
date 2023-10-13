import axios from 'axios';

export const login=(email,password)=>async(dispatch)=>{
  try {
    dispatch({
        type:"getLoginRequest",
    })

    const config = { headers: { "Content-Type": "application/json" } };

    const {data}=await axios.post('/api/v1/login',{email,password},config);

    dispatch({
        type:"getLoginSuccess",
        paylaod:data.user,
    })
    
  } catch (error) {
    dispatch({
        type:"getLoginFail",
        payload:error.response.data.message,
    })
    
  }
}

export const register=(userData)=>async(dispatch)=>{
  try {
    dispatch({
        type:"getRegisterRequest",
    })

    const config = { headers: { "Content-Type": "application/json" } };
    const {data}=await axios.post('/api/v1/register',userData,config)

  
    dispatch({
        type:"getRegisterSuccess",
        paylaod:data.user,
    })
    
  } catch (error) {
    dispatch({
        type:"getRegisterFail",
        payload:error.response.data.message,
    })
    
  }
}


export const loadUser=()=>async(dispatch)=>{
  try {
    dispatch({
      type:"loadUserRequest"
    })

    const {data}=await axios.get('/api/v1/me')

    dispatch({
      type:"loadUserSuccess",
      payload:data.user,
    })
    
  } catch (error) {
    dispatch({
      type:"loadUserFail",
      payload:error.response.data.message,
    })
    
  }
}

export const logout=()=>async(dispatch)=>{
  try {
    await axios.get('/api/v1/logout');

    dispatch({
      type:"logoutSuccess",
      
    })
    
  } catch (error) {
    dispatch({
      type:"logoutFail",
      payload:error.response.data.message,
    })
    
  }
}

export const updateProfile=(userData)=>async(dispatch)=>{
  try {
    dispatch({
        type:"updateProfileRequest",
    })

    const config = { headers: { "Content-Type": "application/json" } };
    const {data}=await axios.put('/api/v1/me/update',userData,config)

  
    dispatch({
        type:"updateProfileSuccess",
        payload:data.success,
    })
    
  } catch (error) {
    dispatch({
        type:"updateProfileFail",
        payload:error.response.data.message,
    })
    
  }
}

export const updatePassword=(password)=>async(dispatch)=>{
  try {
    dispatch({
        type:"updatePasswordRequest",
    })

    const config = { headers: { "Content-Type": "application/json" } };
    const {data}=await axios.put('/api/v1/password/update',password,config)

  
    dispatch({
        type:"updatePasswordSuccess",
        payload:data.success,
    })
    
  } catch (error) {
    dispatch({
        type:"updatePasswordFail",
        payload:error.response.data.message,
    })
    
  }
}

export const forgotPassword=(email)=>async(dispatch)=>{
  try {
    dispatch({
        type:"forgotPasswordRequest",
    })

    const config = { headers: { "Content-Type": "application/json" } };
    const {data}=await axios.post('/api/v1/forgot/password',email,config)

  
    dispatch({
        type:"forgotPasswordSuccess",
        payload:data.message,
    })
    
  } catch (error) {
    dispatch({
        type:"forgotPasswordFail",
        payload:error.response.data.message,
    })
    
  }
}

export const resetPassword=(token,password)=>async(dispatch)=>{
  try {
    dispatch({
        type:"resetPasswordRequest",
    })

    const config = { headers: { "Content-Type": "application/json" } };
    const {data}=await axios.put(`/api/v1/password/reset/${token}`,password,config)

  
    dispatch({
        type:"resetPasswordSuccess",
        payload:data.success,
    })
    
  } catch (error) {
    dispatch({
        type:"resetPasswordFail",
        payload:error.response.data.message,
    })
    
  }
}






export const clearErrors = () => async (dispatch) => {
    dispatch({
        type:"clearErrors"
    });
  };