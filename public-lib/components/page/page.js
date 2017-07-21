import styles from './page.scss';
import classes from 'app-utils/classes';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

export default class Page extends Component {
	static propTypes = {
		title: PropTypes.string,
		className: PropTypes.string,
		children: PropTypes.node.isRequired,
	};

	render() {
		let { title, className, children, ...props } = this.props;

		return (
			<div className={ classes(styles.main, className) } { ...props }>
				{ title ? ( <h1>{ title }</h1> ) : null }
				{ children }
			</div>
		);
	}
}
