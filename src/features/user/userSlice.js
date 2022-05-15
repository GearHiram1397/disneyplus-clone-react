import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    name: "",
    email: "",
    avatar: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
        },
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.avatar = null;
        }
    }
})


export const {setUserLoginDetails, setSignOutState} = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserAvatar = (state) => state.user.avatar;

export default userSlice.reducer;