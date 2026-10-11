import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/users/userSlice.js";
import mediaReducer from "../features/media/mediaSlice.js";

export const store = configureStore({
  reducer: {
    users: userReducer,
    media: mediaReducer,
  },
});