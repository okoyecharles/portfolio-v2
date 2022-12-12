import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: null };
const currentSectionSlice = createSlice({
  name: 'currentSection',
  initialState,
  reducers: {
    updateCurrentSection: (state, action) => ({ ...state, name: action.payload })
  }
})

export const { updateCurrentSection } = currentSectionSlice.actions;
export default currentSectionSlice.reducer;
