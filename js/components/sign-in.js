import React from 'react';
import Navigation from './nav';
import ReturningUser from './returning-user';

export default class SignIn extends React.Component{


	render() {
	return (
		<div>
			<header className="header-image">
			</header>
			<Navigation />
			<ReturningUser />
			
		</div>
	);
  }
}

