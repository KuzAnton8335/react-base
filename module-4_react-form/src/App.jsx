import { useEffect, useRef, useState } from 'react';
import styles from './app.module.css';

const sendFormData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const [email, setEmail] = useState('');
	const [pasw, setPasw] = useState('');
	const [paswRepeat, setPaswRepeat] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const buttonRef = useRef(null);

	useEffect(() => {
		if (!emailError && !passwordError && email && pasw && paswRepeat) {
			buttonRef.current.focus();
		}
	}, [emailError, passwordError, email, pasw, paswRepeat]);

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const validatePassword = (password, repeatPassword) => {
		if (password.length < 6) {
			return 'Пароль должен содержать минимум 6 символов';
		}
		if (password !== repeatPassword) {
			return 'Пароли не совпадают';
		}
		return '';
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmailError('');
		setPasswordError('');

		if (!validateEmail(email)) {
			setEmailError('Введите корректный email');
		}

		const passwordError = validatePassword(pasw, paswRepeat);
		if (passwordError) {
			setPasswordError(passwordError);
		}

		if (!emailError && !passwordError) {
			sendFormData({ email, password: pasw });
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.container}>
				<h2 className={styles.title}>Зарегистрировать</h2>
				<p className={styles.textinfo}>
					Пожалуйста, заполните эту форму, чтобы создать учетную запись.
				</p>
				<label htmlFor="email" className={styles.label}>
					Email
				</label>
				<input
					type="email"
					id="email"
					placeholder="Введите адрес электронной почты"
					className={styles.inputemail}
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="pasw" className={styles.label}>
					Пароль
				</label>
				<input
					type="password"
					placeholder="Введите пароль"
					name="pasw"
					id="pasw"
					className={styles.inputpasw}
					autoComplete="new-password"
					value={pasw}
					onChange={(e) => setPasw(e.target.value)}
				/>

				<label htmlFor="psw-repeat" className={styles.label}>
					Повторите пароль
				</label>
				<input
					type="password"
					placeholder="Введите пароль снова"
					name="psw-repeat"
					id="psw-repeat"
					className={styles.repeatpasw}
					autoComplete="new-password"
					value={paswRepeat}
					onChange={(e) => setPaswRepeat(e.target.value)}
				/>
				<button
					type="submit"
					className={styles.button}
					disabled={!!emailError || !!passwordError}
					ref={buttonRef}
				>
					Зарегистрироваться
				</button>
				<p className={styles.error}>{emailError}</p>
				<p className={styles.error}>{passwordError}</p>
			</div>
		</form>
	);
};
