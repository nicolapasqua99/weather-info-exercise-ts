import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import cityReducer from '../slices/citiesSlice';
import { citiesApi } from '../slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  [citiesApi.reducerPath]: citiesApi.reducer,
  cities: cityReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(citiesApi.middleware),
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
