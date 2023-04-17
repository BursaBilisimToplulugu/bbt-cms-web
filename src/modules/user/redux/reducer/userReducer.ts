import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    greet: () => {
      console.log('Hello');
    }
  }
});

export default userReducer.reducer;

export const { greet } = userReducer.actions;
