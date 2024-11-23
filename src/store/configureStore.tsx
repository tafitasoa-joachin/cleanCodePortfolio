import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioSlice';

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
});

// Exportation du store et des types
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
