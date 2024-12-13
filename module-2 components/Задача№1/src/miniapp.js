import { createElement } from 'react';
import './App.css';
import logo from './logo.svg';

export const MiniApp = () => {
	const currentYear = new Date().getFullYear();
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit  ',
				createElement('code', null, 'src/App.js'),
				'and save to reload',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, `${currentYear}`),
		),
	);
};
