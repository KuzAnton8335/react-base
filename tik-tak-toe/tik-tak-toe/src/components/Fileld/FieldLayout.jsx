import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './gameboard.module.css';

export const FieldLayoutContainer = ({ field, onCellClick }) => {
	return (
		<div className="grid grid-cols-[repeat(3,100px)]">
			{field.map((cell, index) => (
				<button
					key={index}
					onClick={() => onCellClick(index)}
					className="w-[100px] h-[100px] border border-black box-border flex justify-center items-center cursor-pointer"
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayoutContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export const FieldLayout = connect()(FieldLayoutContainer);
