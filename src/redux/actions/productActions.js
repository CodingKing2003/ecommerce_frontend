import axios from 'axios';

export const getProduct=(keyword="",currentPage=1,price=[0,25000],category,rating=0)=>async(dispatch)=>{
    try {
        dispatch({
            type:"getAllProductRequest"
        })

        let link=`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}`;

        if(category){
            link=`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${rating}`;
        }

        const {data}=await axios.get(link)

        dispatch({
            type:"getAllProductSuccess",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"getAllProductFail",
            payload: error.response.data.message,
        })
        
    }
}


export const getProductDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"productDetailsRequest"
        })

        const {data}=await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type:"productDetailsSuccess",
            payload:data.product,
        })
        
    } catch (error) {
        dispatch({
            type:"productDetailsFail",
            payload: error.response.data.message,
        })
        
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type:"clearErrors"
    });
  };