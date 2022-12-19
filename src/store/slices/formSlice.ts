import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		name: '',
		cost: 0,
	},
	reducers: {
		setName() {},
		setCost() {},
	},
});

export const { setCost, setName } = formSlice.actions;
export const formReducer = formSlice.reducer;
