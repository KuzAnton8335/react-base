// import { useDispatch, useSelector } from 'react-redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setResetGame } from '../../actions/actions.js';
import FieldContainer from '../Fileld/Field';
import InformationContainer from '../Information/information';
import GameLayout from './GameLayout';

class Game extends Component {
	// const dispatch = useDispatch();

	// Выберите только необходимые части состояния
	// const currentPlayer = useSelector((state) => state.currentPlayer);
	// const isGameEnded = useSelector((state) => state.isGameEnded);
	// const isDraw = useSelector((state) => state.isDraw);
	// const field = useSelector((state) => state.field);

	handleResetGame = () => {
		const { dispatch } = this.props;
		dispatch(setResetGame());
	};

	render() {
		const { currentPlayer, isGameEnded, isDraw, field } = this.props;
		return (
			<GameLayout>
				<InformationContainer
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
				<FieldContainer
					field={field}
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
				/>
				<button
					onClick={this.handleResetGame}
					className="mt-[20px] px-[16px] py-[8px] border-none cursor-pointer bg-[#783478] text-white"
				>
					Начать заново
				</button>
			</GameLayout>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	field: state.field,
});

export default connect(mapStateToProps)(Game);
