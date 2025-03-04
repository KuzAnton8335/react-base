import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './gameboard.module.css';

export const FieldLayoutContainer = ({ field, onCellClick }) => {
	return (
		<div className={styles.fieldLayout}>
			{field.map((cell, index) => (
				<button
					key={index}
					onClick={() => onCellClick(index)}
					className={styles.cell}
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
