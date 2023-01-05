import { configureStore } from "@reduxjs/toolkit";
import currentSectionReducer from "./slices/current-section_slice";

const store = configureStore({
  reducer: {
    currentSection: currentSectionReducer
  },
})

export type storeType = ReturnType<typeof store.getState>;
export default store;