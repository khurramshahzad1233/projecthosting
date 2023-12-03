import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  user: null,
};

const localUser = localStorage.getItem("auth");

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.authenticated = true;
      state.user = action.payload;
    },

    isLoggedIn: (state) => {
      if (localUser) {
        state.authenticated = true;
        state.user = JSON.parse(localUser);
      }
    },
    logout: (state) => {
      localStorage.removeItem("auth");
      state.authenticated = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, isLoggedIn, logout } = userSlice.actions;

export default userSlice.reducer;
