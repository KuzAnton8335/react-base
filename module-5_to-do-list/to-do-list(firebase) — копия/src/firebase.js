// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyARR1julKvIPNtVBRv6QncJ8nqZpGl8pHE',
	authDomain: 'data-todos.firebaseapp.com',
	projectId: 'data-todos',
	storageBucket: 'data-todos.firebasestorage.app',
	messagingSenderId: '74308152047',
	appId: '1:74308152047:web:c723c18e4b62dc5548891a',
	measurementId: 'G-2WRNED92J3',
	dataBaseUrl: 'https://data-todos-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getDatabase(app);
