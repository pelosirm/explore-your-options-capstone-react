import React from 'react'
import Navigation from './nav';
import NewUser from './new-user'


export default class SignUp extends React.Component{

	render() {
	return (
		<div>
			<header className="header-image">
			</header>
			<Navigation />
			<NewUser />	
		</div>
	);
  }
}