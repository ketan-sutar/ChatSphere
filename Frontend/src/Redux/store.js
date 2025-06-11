import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messageReducer from "./messageSlice.js";
import socketReducer from "./socketSlice.js";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  socket: socketReducer,
});

// Configure persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"], // only persist `user` slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with extended middleware config
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, "socket/setSocket"],
        // Ignore path that stores socket instance
        ignoredPaths: ["socket.socket"],
      },
    }),
});

export default store;
