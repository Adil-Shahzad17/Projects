import { configureStore } from "@reduxjs/toolkit";
import pexelsSlice from "./PexelSlice";

const PexelsStore = configureStore({
  reducer: {
    pexels: pexelsSlice,
  },
});

export default PexelsStore;
