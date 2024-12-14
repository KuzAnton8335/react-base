import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const handleBack = () => {
		if (!isFirstStep) {
			setActiveIndex((prevIndex) => prevIndex - 1);
		}
	};

	const handleNext = () => {
		if (isLastStep) {
			setActiveIndex(0);
		} else {
			setActiveIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{steps[activeIndex]?.content || ` Шаг ${activeIndex + 1}`}
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}

						{steps.map((steps, index) => (
							<li
								key={index}
								className={`${styles['steps-item']} ${
									index < activeIndex ? styles.done : ''
								} ${index === activeIndex ? styles.active : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{steps.title || `Шаг ${index + 1}`}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handleBack}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNext}>
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
