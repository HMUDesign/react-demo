import React, { Component } from 'react';
import Lipsum from 'app-components/lipsum/lipsum';
import Page from 'app-components/page/page';

export default class App extends Component {
	render() {
		return (
			<Page title="Home">
				<Lipsum />
			</Page>
		);
	}
}
