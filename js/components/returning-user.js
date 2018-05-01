import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { required, nonEmpty } from '../validators';
import Input from './input';
import * as user from '../actions/user';
import * as messageAction from '../actions/display-message';
import history from '../history'

export class ReturningUser extends React.Component{

	onSubmit(values) {
		this.props.dispatch(messageAction.loadingTrue())
		return this.props
		.dispatch(user.loginUser(values))
		.then((res)=>{
			this.props.dispatch(messageAction.loadingFalse())
			if(res.status !== 200){
				this.props.dispatch(messageAction.displayMessage('Oops! something went wrong'))
			} else {
				history.push('/search-page')
			}
		})
	}

	componentDidUpdate(){
		setTimeout(() => {
	  		this.props.dispatch(messageAction.hideDisplayMessage())
		}, 3000)	
	}

	render(){
		let errorMessage; 
		if(this.props.error) {
			errorMessage = (
				<div className="message message-error"> { this.props.error } </div>
			)
		}
		
		return(
			<div>
				<section className="sign-up">
			        <div className="login input-square returning-user">
			            <form className="form-returning-user"
			            	onSubmit={this.props.handleSubmit(values => 
			            		this.onSubmit(values)
			            	)}>
			            	{ errorMessage }
			                <legend> Login </legend>
			                <p className='demo-user'> for demo username : 'demo' password : 'demo' </p>
			                <Field 
			                	name="username"
			                	placeholder="username"
			                	type="text"
			                	component={Input}
			                	validate={[required,nonEmpty]}
			                />
			                <Field 
			                	name="password"
			                	placeholder="password"
			                	type="password"
			                	component={Input}
			                	validate={[required,nonEmpty]}
			                />
			                <button
	                    		type="submit"
	                    		disabled={this.props.pristine || this.props.submitting}>
	                    		Submit
	                		</button>
			                <p> not a user?<Link to="/sign-up" className="nav-sign-up"> create a login</Link></p>
			            </form>
			        </div>
			    </section>
		    </div>
		);
	}
}

const mapStateToProps=state => ({
  message : state.exploreReducer.message
});

ReturningUser = connect(mapStateToProps)(ReturningUser);

export default reduxForm({
    form: 'returnUser',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('returnUser', Object.keys(errors)[0]))
})(ReturningUser);