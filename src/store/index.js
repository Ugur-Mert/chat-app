import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import messages from "./messages";
import mode from "./mode";

const store = configureStore({
  reducer: {
    auth,
    messages,
    mode,
  },
});

export default store;
