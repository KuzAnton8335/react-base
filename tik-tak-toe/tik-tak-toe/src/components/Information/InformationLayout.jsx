import styles from './information.module.css'; // CSS-модуль для стилей

const InformationLayout = ({ children }) => {
	return <div className={styles.InformationLayout}>{children}</div>;
};

export default InformationLayout;
