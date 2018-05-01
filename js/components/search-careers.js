import React from 'react';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Navigation from './nav';
import * as actions from '../actions';
import * as message from '../actions/display-message';
import history from '../history';


export class SearchCareersPage extends React.Component{

componentWillMount() {
	this.props.dispatch(actions.getCareerInputCall());

}

onSubmit(values){
	this.props.dispatch(message.loadingTrue())
	return this.props
	.dispatch(actions.getCareerQueryCall(values))
	.then((res)=>{
		this.props.dispatch(message.loadingFalse())
		history.push('/career-results')
	})
}

render() {
	let alphaSortCareers = this.props.searchCareerInput.sort(function(a, b){
	    if(a.OCC_TITLE < b.OCC_TITLE) return -1;
	    if(a.OCC_TITLE > b.OCC_TITLE) return 1;
	    return 0;
	})

	let alphaSortState = this.props.searchCareerStateInput.sort(function(a, b){
	    if(a.State < b.State) return -1;
	    if(a.State > b.State) return 1;
	    return 0;
	})

	const searchCareerInput=alphaSortCareers.map((career,index)=>(
		<option value={career.OCC_CODE} key={index}> {career.OCC_TITLE} </option>
		));

	const searchCareerStateInput=alphaSortState.map((state,index)=>(
		<option value={state.Abbreviation} key={index}>{state.State}</option>
		));

	let errorMessage; 
		if(this.props.error) {
			errorMessage = (
				<div className="message message-error"> { this.props.error } </div>
			)
		}

	return (
		<div>
		<Navigation />
	    <section className="search-options">
	        <h1> Explore </h1>
	        { errorMessage }
	        <div className="row">
	            <div className="col-6 container search-careers">
	            	<form className="form-search-careers" onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
						)}>
	            		<legend> Search Careers </legend>
	            			<div className="center-on-page">
	            				<div className="select">
	            					<Field 
										name="career"
										component="select"
										type="select"
										valuefield="value"
										textfield="career">
										<option> Select Career </option>
										{ searchCareerInput }
									</Field>
	            				</div>
	            				<div className="select">
	            					<Field 
										name="state"
										component="select"
										type="select"
										valuefield="value"
										textfield="state">
										<option> Select State </option>
										{ searchCareerStateInput }
									</Field>
	            				</div>
	            				<button
		                    		type="submit"
		                    		disabled={this.props.pristine || this.props.submitting}>
		                    		Submit
		                		</button>
	            			</div>
	            	</form>
	            </div>
	            <div className="col-6 container search-colleges">
	                <img src="assets/img/books.jpg" className="image" alt="bookshelf"></img>
	                <div className="middle">
	                    <div className="text"><Link to="/search-colleges-page">Search Colleges</Link></div>
	                </div>
	            </div>
	        </div>
	    </section>
	   </div>
	);
  }
}


const mapStateToProps=state => ({
	searchCareerInput : state.exploreReducer.searchCareerInput, 
	searchCareerStateInput : state.exploreReducer.searchCareerStateInput
});

SearchCareersPage=connect(mapStateToProps)(SearchCareersPage)

export default reduxForm({
	form: 'career-select'
})(SearchCareersPage)

