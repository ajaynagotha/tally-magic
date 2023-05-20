const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  companyData: null,
};

const companySlice = createSlice({
  name: "cpompany",
  initialState: initialState,
  reducers: {
    saveCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
  },
});
export const { saveCompanyData } = companySlice.actions;
export default companySlice.reducer;
