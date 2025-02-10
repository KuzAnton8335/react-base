import '../../App.css';
import { useSearchContext } from '../context/SearchContext';

export const SearchBar = () => {
	const { searchTerm, handleSearchChange } = useSearchContext();

	return (
		<input
			type="text"
			placeholder="Поиск задач"
			value={searchTerm}
			onChange={handleSearchChange}
			className="form-control input"
		/>
	);
};
