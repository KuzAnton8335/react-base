import React, { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	// ссотояние ввода,вывода,результата
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState(null);
	const [isResult, setIsResult] = useState(false);

	// массив кнопок для калькулятора
	const buttons = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'+',
		'-',
		'=',
		'C',
	];

	// обработчик кнопок калькулятора
	const handleButtonClick = (value) => {
		// сброс цифир при нажатии кнопки 'C'
		if (value === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setResult(null);
			setIsResult(false);
			// вывод результата при нажатии кнопки '='
		} else if (value === '=') {
			if (operand1 && operator && operand2) {
				// eval() - это встроенная функция в JavaScript, которая позволяет выполнять JavaScript-код, представленный в виде строки.
				const evalResult = eval(`${operand1} ${operator} ${operand2}`);
				setResult(evalResult);
				setIsResult(true);
				setOperand1('');
				setOperator('');
				setOperand2('');
			}
			// вывод результата при нажатии кнопки '+' или '-'
		} else if (['+', '-'].includes(value)) {
			if (operand1 && !operator) {
				setOperator(value);
			}
		} else {
			if (!operator) {
				setOperand1((prev) => prev + value);
			} else {
				setOperand2((prev) => prev + value);
			}
		}
	};

	// вывод результата на страницу в поле display (displayValue)
	const displayValue = isResult ? result : `${operand1} ${operator} ${operand2}`;
	// разметка страницы калькулятора(все кнопки, калькулятор)и его содержимое
	return (
		<>
			<div className={styles.container}>
				<div className={styles.calculator}>
					<h2 className={styles.title}>Калькулятор</h2>
					<div
						className={styles.display}
						style={{ color: isResult ? 'green' : 'black' }}
					>
						{displayValue}
					</div>
					<div className={styles.buttons}>
						{buttons.map((button, index) => (
							<button
								key={index}
								className={styles.button}
								type="button"
								onClick={() => handleButtonClick(button)}
							>
								{button}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
