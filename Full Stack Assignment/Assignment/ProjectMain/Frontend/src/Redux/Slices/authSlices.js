import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk("auth/signup",async(data,{RejectedWithValue})=>{
    try {
        const response = await axios.post("http://localhost:3000/auth/signup",data);
        return response;
    } catch (error) {
       RejectedWithValue(error);
    }
})


const initialState = {
    isLoading : false,
    user : null,
    error : null
 
}

const authSlice = createSlice({
    name :"auth",
    initialState,


    
    reducers : {
setLoading : (state)=>{
            state.isLoading = false;

},
setSuccess : (state, action)=>{
    state.isLoading = false;
    state.user = action.payload;
    
},
setError : (state,action)=>{
    state.isLoading = false;
    state.error = action.payload

}

}

}
)
export const { setLoading , setSuccess , setError} = authSlice.actions;
// export const signup = (data)=>{
//     return async (dispatch)=>{
//         dispatch(setLoading());
//        try {
//         const response = await axios.post("http://localhost:3000/auth/signup",data);
            
//         dispatch(setSuccess(response.data.data));
//        } catch(error){
//         dispatch(setError(error.response.data));
//        }
//     }
// }


export default authSlice.reducer;
