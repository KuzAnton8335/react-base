import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './app.module.css';

const schema = yup.object().shape({
	email: yup
		.string()
		.email(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Неверный формат')
		.required('Обязательное поле'),
	pasw: yup
		.string()
		.min(6, 'Пароль должен быть не менее 6 символов')
		.required('Обязательное поле'),
	paswRepeat: yup
		.string()
		.oneOf([yup.ref('pasw'), null], 'Пароли должны совпадать')
		.required('Обязательное поле'),
});

export const Yup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const buttonRef = useRef(null);

	const onSubmit = (formData) => {
		console.log(formData);
		buttonRef.current.focus();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.container}>
				<h2 className={styles.title}>Зарегистрировать</h2>
				<p className={styles.textinfo}>
					Пожалуйста, заполните эту форму, чтобы создать учетную запись.
				</p>
				<label className={styles.label}>Email</label>
				<input
					type="email"
					id="email"
					placeholder="Введите адрес электронной почты"
					className={styles.inputemail}
					autoComplete="email"
					{...register('email')}
				/>
				<p className={styles.error}>{errors.email?.message}</p>
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
					{...register('pasw')}
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
					{...register('paswRepeat')}
				/>
				<p className={styles.error}>{errors.paswRepeat?.message}</p>
				<button
					type="submit"
					className={styles.button}
					disabled={!!Object.keys(errors).length}
					ref={buttonRef}
				>
					Зарегистрироваться
				</button>
			</div>
		</form>
	);
};
