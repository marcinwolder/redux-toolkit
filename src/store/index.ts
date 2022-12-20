import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './slices/carsSlice';
import { formReducer } from './slices/formSlice';

export const store = configureStore({
	reducer: {
		form: formReducer,
		cars: carsReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;

export * from './slices/carsSlice';
export * from './slices/formSlice';
