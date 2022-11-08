import { configureStore } from '@reduxjs/toolkit';
import { TaskReducer } from '../../features/got/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        tasks: TaskReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
