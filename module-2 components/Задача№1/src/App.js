import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение');
		if (promptValue === null || promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setValue('');
			return;
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const isValueValid = value.length >= 3;

	const onAddButtonClick = () => {
		if (isValueValid) {
			// Проверка на валидность
			setList([...list, { id: Date.now(), value }]);
			setValue('');
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>: "
					<output className={styles['current-value']}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles['buttons-container']}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={!isValueValid} // Используем правильную переменную
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>
					<ul className={styles.list}>
						{list.length > 0 ? (
							list.map((item) => (
								<li className={styles['list-item']} key={item.id}>
									{item.value}
								</li>
							))
						) : (
							<p className={styles['no-margin-text']}>
								Нет добавленных элементов
							</p>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};
