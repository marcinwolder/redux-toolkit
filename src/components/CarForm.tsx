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
		if (name && cost)
			dispatch(
				addCar({
					name,
					cost,
					id: nanoid(),
				})
			);
	};
	return (
		<div className='bg-emerald-200 p-3 my-3 w-3/4 mx-auto'>
			<form className='flex flex-col'>
				<label htmlFor='carName'>Car name:</label>
				<input
					className='p-1'
					type='text'
					value={name}
					onChange={(e) => {
						dispatch(setName(e.target.value));
					}}
					name='carName'
				/>
				<label htmlFor='carCost'>Car cost:</label>
				<input
					className='p-1'
					type='number'
					value={cost || ''}
					onChange={(e) => {
						dispatch(setCost(parseFloat(e.target.value)));
					}}
					name='carCost'
				/>
				<button
					className='mt-3 w-max mx-auto bg-white hover:bg-zinc-100 px-6 py-2 rounded-lg border-2 shadow-md border-zinc-400'
					onClick={handleSubmit}
					type='submit'
				>
					Add car
				</button>
			</form>
		</div>
	);
};
