import React from 'react';
import { reduxForm, Field, focus} from 'redux-form';
import { required, nonEmpty } from '../validators';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from './input';
import * as user from '../actions/user';
import * as messageAction from '../actions/display-message';
import history from '../history'


export class NewUser extends React.Component{


	onSubmit(values){
        this.props.dispatch(messageAction.loadingTrue())
        return this.props
        .dispatch(user.createUser(values))
        .then((res)=>{
            this.props.dispatch(messageAction.loadingFalse())
            if(res.status !== 200){
                this.props.dispatch(messageAction.displayMessage('Oops! something went wrong'))
            } else {
                console.log('fired')
                history.push('/search-page')
            }
        })
	}


    componentDidUpdate(){
        setTimeout(() => {
            this.props.dispatch(messageAction.hideDisplayMessage())
        }, 2000)    
    }

	render(){
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

		return(
            <div>
			<section className="sign-up">
				<div className="login input-square create-new">
		            <form className="form-create-new"
		            	onSubmit={this.props.handleSubmit(values => 
                                this.onSubmit(values)
                            )}>
                		{errorMessage}
		                <legend> Create New User </legend>
		                <Field
                    		name="username"
                    		placeholder="username"
                    		type="text"
                   			component={Input}
                    		validate={[required, nonEmpty]}
                		/>
                		<Field
                    		name="password"
                    		type="password"
                    		placeholder="password"
                   			component={Input}
                    		validate={[required, nonEmpty]}
                		/>
                		<Field
                    		name="confirmPassword"
                    		type="password"
                    		placeholder="confirm password"
                   			component={Input}
                    		validate={[required, nonEmpty]}
                		/>
                		<button
                    		type="submit"
                    		disabled={this.props.pristine || this.props.submitting}>
                    		Submit
                		</button>
		                <p> already a user? <Link to="/sign-in" className="nav-login">login</Link></p>
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

NewUser = connect(mapStateToProps)(NewUser);

export default reduxForm({
    form: 'newUser',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newUser', Object.keys(errors)[0]))
})(NewUser);