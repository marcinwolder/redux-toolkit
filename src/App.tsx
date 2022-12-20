import { CarForm } from './components/CarForm';
import { CarList } from './components/CarList';
import { CarSearch } from './components/CarSearch';
import { CarPrice } from './components/CarPrice';

function App() {
	return (
		<div>
			<CarForm />
			<CarSearch />
			<CarList />
			<CarPrice />
		</div>
	);
}

export default App;
