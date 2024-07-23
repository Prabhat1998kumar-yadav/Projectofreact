import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchPost=createAsyncThunk("fetchData/Post", async function(){
   let response= await fetch("https://api.escuelajs.co/api/v1/products");
   return await response.json(); 
})


const prodctSlice=createSlice({
     name:"productSlice",
     initialState:{
        product:[],
        status:"idle",
        error:null
     },
     extraReducers:function(builder){
      builder.addCase(fetchPost.pending,(state,action)=>{
         state.status="loading";
      }).addCase(fetchPost.fulfilled,(state,action)=>{
         state.status="success";
         state.product=action.payload;
      }).addCase(fetchPost.rejected,(state,action)=>{
         state.status="failed";
         state.error=action.error.message;
      })
     }
})

export default prodctSlice.reducer;
