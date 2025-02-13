import styles from './game.module.css'; // CSS-модуль для стилей

export const GameLayout = ({ children }) => {
	return <div className={styles.GameLayout}>{children}</div>;
};
