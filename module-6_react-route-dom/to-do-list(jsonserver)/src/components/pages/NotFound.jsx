import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className="not-found">
			<h1 className="not-found__title">404 - Страница не найдена</h1>
			<p className="not-found__descr">
				К сожалению, страница, которую вы ищете, не существует.
			</p>
			<Link to="/" className="not-found__link">
				Перейти на главную страницу
			</Link>
		</div>
	);
};
