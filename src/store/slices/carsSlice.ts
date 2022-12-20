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
	} as {
		searchValue: string;
		data: Car[];
	},
	reducers: {
		addCar(state, action: { type: string; payload: Car }) {
			state.data.push(action.payload);
		},
		removeCar(state, action: { type: string; payload: string }) {
			const newState = state.data.filter((car) => car.id !== action.payload);
			return { ...state, data: newState };
		},
		changeSearchValue(state, action: { type: string; payload: string }) {
			state.searchValue = action.payload;
		},
	},
});

export const { addCar, changeSearchValue, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
