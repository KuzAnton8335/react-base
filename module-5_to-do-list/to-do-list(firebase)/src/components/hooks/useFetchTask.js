import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';

export const useFetchTasks = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const tasksRef = ref(db, 'tasks');
		onValue(
			tasksRef,
			(snapshot) => {
				const tasks = [];
				snapshot.forEach((childSnapshot) => {
					const task = { id: childSnapshot.key, ...childSnapshot.val() };
					tasks.push(task);
				});
				setData(tasks);
				setLoading(false);
			},
			(error) => {
				setError(error);
				setLoading(false);
			},
		);
	}, []);

	return { data, loading, error, setData };
};
