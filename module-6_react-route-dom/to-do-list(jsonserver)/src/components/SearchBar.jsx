export const SearchBar = ({ searchTerm, handleSearchChange }) => {
	return (
		<input
			type="text"
			placeholder="Поиск задач"
			value={searchTerm}
			onChange={handleSearchChange}
			className="form-control"
		/>
	);
};
