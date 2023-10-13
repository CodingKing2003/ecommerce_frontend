import { createReducer } from "@reduxjs/toolkit";

const initialState={
    

    
    error: null,
   
    isAuthenticated:false,
    user:{},

}

export const userReducers=createReducer(initialState,{
    getLoginRequest:(state)=>{
        state.loading=true;
        state.isAuthenticated=false;
    },
    getLoginSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
        
    },
    getLoginFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;
        state.error=action.payload;
     
    },

    getRegisterRequest:(state)=>{
        state.loading=true;
        state.isAuthenticated=false;

    },

    getRegisterSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;


    },
    getRegisterFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;
        state.error=action.payload;
     
    },

    loadUserRequest:(state)=>{
        state.loading=false;
        state.isAuthenticated=false;


    },

    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;

    },

    laodUserFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;
        state.error=action.payload;

    },

    logoutSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;

    },
    logoutFail:(state,action)=>{
        state.laoding=false;
        state.error=action.paylaod

    },

    clearErrors: (state) => {
        state.error = null;
      },

})


export const profileReducers=createReducer(initialState,{
    updateProfileRequest:(state)=>{
        state.loading=true;
    },
    updateProfileSuccess:(state,action)=>{
        state.loading=false;
        state.isUpdated=action.payload;
    },
    updateProfileFail:(state,action)=>{
        state.laoding=false;
        state.error=action.payload;
    },
    updateProfileReset:(state)=>{
        state.isUpdated=false;
    },

    updatePasswordRequest:(state)=>{
        state.loading=true;
    },
    updatePasswordSuccess:(state,action)=>{
        state.loading=false;
        state.isUpdated=action.payload;
    },
    updatePasswordFail:(state,action)=>{
        state.laoding=false;
        state.error=action.payload;
    },
    updatePasswordReset:(state)=>{
        state.isUpdated=false;
    },

    clearErrors: (state) => {
        state.error = null;
      },
})

export const forgotPasswordReducer=createReducer(initialState,{
    forgotPasswordRequest:(state)=>{
        state.loading=true;
    },
    forgotPasswordSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    forgotPasswordFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    resetPasswordRequest:(state)=>{
        state.loading=true;
    },
    resetPasswordSuccess:(state,action)=>{
        state.loading=false;
        state.success=action.payload;
    },
    resetPasswordFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;

    },

    clearErrors: (state) => {
        state.error = null;
      },
})