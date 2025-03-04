import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './information.module.css'; // CSS-модуль для стилей
class InformationLayout extends Component {
	render() {
		const { children } = this.props;
		return <div className={styles.InformationLayout}>{children}</div>;
	}
}

export default connect()(InformationLayout);
