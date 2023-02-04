import { userAuth } from '@/models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  access_token: '',
  refresh_token: '',
  expires_date: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserAuth: (state, action: PayloadAction<userAuth>) => {
      return { ...state, ...action.payload };
    },
    removeUserAuth: (state) => {
      return { ...state };
    },
  },
});

export const { addUserAuth, removeUserAuth } = userSlice.actions;

export default userSlice.reducer;
