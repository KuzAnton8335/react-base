import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './game.module.css'; // CSS-модуль для стилей

class GameLayout extends Component {
	render() {
		const { children } = this.props;
		return <div className={styles.GameLayout}>{children}</div>;
	}
}

export default connect()(GameLayout);
