import { createSlice } from '@reduxjs/toolkit';

export interface Car {
	name: string;
	cost: number;
	id: string;
}

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
