import { createSlice } from "@reduxjs/toolkit";



const singleProductSlice=createSlice({
    name:"singleProductSlice",
    initialState:{
        value:[]
    },
    reducers:{
        increaseValue:(state,action)=>{
           let card=state.value.find((item)=>item.id == action.payload);
           if(card){
            card.number+=1
            return;
           }
            state.value.push({
                id:action.payload,
                number:1
            })
                        
             
        },
        decreaseValue:(state,action)=>{
            let card=state.value.find((item)=>item.id == action.payload);
           if(card){
            if(card.number == 0){
                state.value.push({
                    id:action.payload,
                    number:0
                })
                return;
            }
            card.number-=1
            return;
           }
             
        }
    }
   
})

export default singleProductSlice.reducer;
export const{increaseValue,decreaseValue}=singleProductSlice.actions;