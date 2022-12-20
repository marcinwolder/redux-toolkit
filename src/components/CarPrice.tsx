import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const CarPrice: React.FC = () => {
	const totalPrice = useSelector((state: RootState) => {
		const {
			cars: { data, searchValue },
		} = state;
		return data
			.filter((car) =>
				car.name.toLowerCase().includes(searchValue.toLowerCase())
			)
			.reduce((prev, curr) => prev + curr.cost, 0);
	});

	return (
		<div className='w-3/4 my-2'>
			<p className='ml-auto w-max font-medium'>Total Price: ${totalPrice}</p>
		</div>
	);
};
