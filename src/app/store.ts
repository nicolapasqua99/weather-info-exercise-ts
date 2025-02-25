import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import cityReducer from '../slices/citiesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { citiesApi } from '../slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const persistConfig = {
    key: 'root',
    storage,
}

//configuro la lista delle città selezionate come persited in modo da mantenerla tra varie sessioni
const persistedReducer = persistReducer(persistConfig, cityReducer);

//unisco i reducer della lista città con la mia api
const rootReducer = combineReducers({
    [citiesApi.reducerPath]: citiesApi.reducer,
    cities: persistedReducer,
})

//esporto lo store completo
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(citiesApi.middleware),
});

setupListeners(store.dispatch)

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
