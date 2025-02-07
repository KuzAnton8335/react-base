import { useEffect, useState } from 'react';
import { API_URL } from '../const';

export const useFetchTasks = (initialState = []) => {
	const [data, setData] = useState(initialState);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL);
				const result = await response.json();
				setData(result);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return { data, loading, error, setData };
};
