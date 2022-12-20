import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, removeCar } from '../store';

export const CarList: React.FC = () => {
	const data = useSelector((state: RootState) => state.cars.data);
	const dispatch = useDispatch();

	const listElements = () => {
		return data.map((car) => {
			const handleRemove = () => {
				dispatch(removeCar(car.id));
			};
			return (
				<div key={car.id}>
					<div className='flex justify-between'>
						<p>{car.name}</p>
						<p>{car.cost}$</p>
					</div>
					<button onClick={handleRemove}>Remove</button>
				</div>
			);
		});
	};
	return <div>{listElements()}</div>;
};
