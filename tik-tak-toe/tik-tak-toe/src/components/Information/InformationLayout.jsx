import { Component } from 'react';
import { connect } from 'react-redux';
import './information.module.css'; // CSS-модуль для стилей
class InformationLayout extends Component {
	render() {
		const { children } = this.props;
		return <div className="text-[25px] text-center pb-[15px]">{children}</div>;
	}
}

export default connect()(InformationLayout);
