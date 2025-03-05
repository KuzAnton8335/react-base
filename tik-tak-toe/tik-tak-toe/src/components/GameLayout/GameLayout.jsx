import { Component } from 'react';
import { connect } from 'react-redux';
import './game.module.css'; // CSS-модуль для стилей

class GameLayout extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="flex flex-col justify-center items-center mt-[150px] mb-[150px]">
				{children}
			</div>
		);
	}
}

export default connect()(GameLayout);
