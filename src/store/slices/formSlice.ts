import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		name: '',
		cost: 0,
	},
	reducers: {
		setName(state, action: { type: string; payload: string }) {
			state.name = action.payload;
		},
		setCost(state, action: { type: string; payload: number }) {
			state.cost = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(addCar, (state, action) => {
			state.cost = 0;
			state.name = '';
		});
	},
});

export const { setCost, setName } = formSlice.actions;
export const formReducer = formSlice.reducer;
