import { api } from "@app/api/api";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (defaultMW) => defaultMW({ serializableCheck: false }).concat(api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
