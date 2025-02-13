import { createStore } from 'redux';
import reducer from './reducer';

//Создаем хранилище
const store = createStore(reducer);

// Экспортируем хранилище
export default store;
