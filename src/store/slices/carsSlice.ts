import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchValue: '',
		data: [],
	},
	reducers: {
		addCar() {},
		removeCar() {},
		changeSearchValue() {},
	},
});

export const { addCar, changeSearchValue, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
