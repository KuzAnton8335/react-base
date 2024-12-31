import PropTypes from 'prop-types'; // CSS-модуль для стилей
import styles from './gameboard.module.css';

const FieldLayout = ({ field, onCellClick }) => {
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

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
