import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import messages from "./messages";

const store = configureStore({
  reducer: {
    auth,
    messages,
  },
});

export default store;
