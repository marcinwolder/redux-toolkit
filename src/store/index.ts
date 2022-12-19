import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './slices/carsSlice';
import { formReducer } from './slices/formSlice';

export const store = configureStore({
	reducer: {
		form: formReducer,
		cars: carsReducer,
	},
});
