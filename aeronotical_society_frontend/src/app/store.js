import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "../features/profile/detailsSlice";
export default configureStore({
  reducer: {
    detailsReducer: detailsReducer,
  },
});
