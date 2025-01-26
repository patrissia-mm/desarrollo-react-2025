import { createSlice } from "@reduxjs/toolkit";

//Creando variables globales (redux)
const initialState = {
  loginFormData: {
    module: "React Mod7",
    username: "",
    email: "",
    password: "mod7USIP-PATRICIA",
  },
};

//Metodos para tratar las variables globales (redux)
export const formSlice = createSlice({
  name: "loginFormData",
  initialState,
  reducers: {
    setInitialValue: (state, action) => {
      state.loginFormData = action.payload;
    },
    resetFormData: (state) => {
      state.loginFormData = initialState.loginFormData; 
    },
  }
});

// Action creators are generated for each case reducer function
export const { setInitialValue, resetFormData } = formSlice.actions;

export default formSlice.reducer;
