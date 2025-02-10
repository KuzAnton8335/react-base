import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<SearchContext.Provider value={{ searchTerm, handleSearchChange }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearchContext = () => {
	return useContext(SearchContext);
};
