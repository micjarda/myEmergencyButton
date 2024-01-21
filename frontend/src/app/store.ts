import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// Reducers
import callSlice from "../features/slices/callSlice";
// Api
import { buttonApi } from "../features/api/buttonapi";
const persistConfig = {
  key: "root",
  storage,
};

const persistedCalls = persistReducer(persistConfig, callSlice);

const store = configureStore({
  reducer: {
    calls: persistedCalls,
    [buttonApi.reducerPath]: buttonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(buttonApi.middleware),
});

// Create the persistor
const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
