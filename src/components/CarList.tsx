import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, removeCar } from '../store';

import { FaTrashAlt } from 'react-icons/fa';

export const CarList: React.FC = () => {
	const { data, name } = useSelector((state: RootState) => {
		const {
			cars: { data, searchValue },
		} = state;
		return {
			data: data.filter((car) =>
				car.name.toLowerCase().includes(searchValue.toLowerCase())
			),
			name: state.form.name,
		};
	});
	const dispatch = useDispatch();

	const listElements = () => {
		return data.map((car) => {
			const handleRemove = () => {
				dispatch(removeCar(car.id));
			};
			const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
			return (
				<div
					key={car.id}
					className='flex justify-between gap-3 p-2 shadow rounded border-zinc-600 border'
				>
					<div
						className={`flex justify-between flex-1 ${bold && 'font-medium'}`}
					>
						<p>{car.name}</p>
						<p>${car.cost}</p>
					</div>
					<button className='group' onClick={handleRemove}>
						<FaTrashAlt className='text-red-600 group-hover:text-red-700' />
					</button>
				</div>
			);
		});
	};
	return (
		<div className='w-1/2 mx-auto flex flex-col gap-2'>{listElements()}</div>
	);
};
