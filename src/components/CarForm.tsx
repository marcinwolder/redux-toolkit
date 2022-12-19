import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { RootState, setCost, setName } from '../store';

export const CarForm: React.FC = () => {
	const dispatch = useDispatch();
	const { name, cost } = useSelector((state: RootState) => ({
		name: state.form.name,
		cost: state.form.cost,
	}));
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
		</form>
	);
};
