// import { useSelector } from 'react-redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import './information.module.css';
import InformationLayout from './InformationLayout';

class InformationContainer extends Component {
	// Выберите только необходимые части состояния
	// const currentPlayer = useSelector((state) => state.currentPlayer);
	// const isGameEnded = useSelector((state) => state.isGameEnded);
	// const isDraw = useSelector((state) => state.isDraw);

	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;

		return (
			<InformationLayout>
				{isDraw
					? 'Ничья'
					: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
			</InformationLayout>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export default connect(mapStateToProps)(InformationContainer);
