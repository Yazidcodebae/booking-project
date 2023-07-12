import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { recomendationSlice } from "./recomendationSlice";

const reducers = combineReducers({
    recomendation: recomendationSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);
export { store, persistor };
