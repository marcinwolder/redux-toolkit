import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { RootState, setCost, setName, addCar } from '../store';

export const CarForm: React.FC = () => {
	const dispatch = useDispatch();
	const { name, cost } = useSelector((state: RootState) => ({
		name: state.form.name,
		cost: state.form.cost,
	}));
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(
			addCar({
				name,
				cost,
				id: nanoid(),
			})
		);
	};
	return (
		<form>
			<label htmlFor='carName'>Car name:</label>
			<input
				type='text'
				value={name}
				onChange={(e) => {
					dispatch(setName(e.target.value));
				}}
				name='carName'
			/>
			<label htmlFor='carCost'>Car cost:</label>
			<input
				type='number'
				value={cost || ''}
				onChange={(e) => {
					dispatch(setCost(parseFloat(e.target.value)));
				}}
				name='carCost'
			/>
			<button onClick={handleSubmit} type='submit'>
				Add car
			</button>
		</form>
	);
};
