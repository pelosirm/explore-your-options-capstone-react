import React from 'react';
import Header from './header';
import Navigation from './nav';
import HowItWorks from './how-it-works';

export default class FrontPage extends React.Component{

	render() {
	return (
		<div>
			<Navigation />
			<Header />
			<HowItWorks />
		</div>
	);
  }
}