import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const Userslice=createSlice({
              initialState:{
                value:{name:"", id:""}
              },
              reducer:{
                login:(state,action)=>{
                  state.value=action.payload
                }
              }
})
export default Userslice.reducer;