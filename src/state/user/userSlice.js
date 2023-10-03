import { createSlice } from "@reduxjs/toolkit";
import usersObject from "../users";

export const userSlice = createSlice({
    name: 'user',
    initialState: usersObject,
    reducers:{
        deleteUser: (state, action)=>{
            return state.filter((s)=> s.id!==action.payload);
        },
        addUser: (state, action)=>{
            state += state.push(action.payload);
        },
        updateUser: (state, action)=>{
            const {id, name, email} = action.payload;
            // eslint-disable-next-line
            const uu = state.find(user=> user.id == (id))
            if(uu){
                uu.name = name;
                uu.email = email;
            }
        }

    }
})

export const {deleteUser, addUser, updateUser} = userSlice.actions;
export default userSlice.reducer