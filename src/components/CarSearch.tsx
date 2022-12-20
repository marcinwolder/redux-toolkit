import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImSearch } from 'react-icons/im';
import { changeSearchValue } from '../store';

import { RootState } from '../store';

export const CarSearch: React.FC = () => {
	const searchValue = useSelector((state: RootState) => state.cars.searchValue);
	const dispatch = useDispatch();

	return (
		<div className=' flex justify-around m-3'>
			<h1 className='text-3xl font-semibold'>My Cars: </h1>
			<div className='flex items-center relative border border-zinc-200 hover:border-zinc-400 focus-within:border-zinc-400 rounded'>
				<input
					value={searchValue}
					onChange={(e) => {
						dispatch(changeSearchValue(e.target.value));
					}}
					className=' p-1'
					type='text'
				/>
				<ImSearch className='mx-2' />
			</div>
		</div>
	);
};
