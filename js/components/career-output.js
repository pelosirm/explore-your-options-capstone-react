import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import DisplayMessage from './message';
import Navigation from './nav';

import * as actions from '../actions/save-data';

export class CareerOutput extends React.Component{

	saveData(career,user){
		let saveDataSet = career
		saveDataSet.user = user
		this.props.postCareerData(saveDataSet)
	}


	render(){
		let displayMessage;

		if(this.props.message) {
			displayMessage = (
					<DisplayMessage message={this.props.message} />
				);
		}

		let saveButton;
		if(!this.props.modal){
			saveButton = (
				<div>
					<div className="row">
				    	<div className="col-12">
				    		<button className="save-career-btn" onClick={()=>this.saveData(this.props.searchCareerResults,this.props.user)}> Save Career</button>
				    	</div>
				    </div>
				    <p className="new-search center"><Link to="/search-page"> new search </Link></p>
				</div>
			)
		}

		let careerData;
		if(!this.props.modal){
			careerData = this.props.searchCareerResults
		} else {
			careerData = this.props.career
		}

		return(
			<div>
				<Navigation />
				{ displayMessage }
				
			    <section className="career-results">

			    	<div className="row career-column">
			    		<div className="col-12">
				    		<p><span className="heavy emphasis orange">{careerData.career}</span>
				    		<br></br>
				    		<span className="light"> {careerData.state} </span></p>
				    		<ul>
				    			<li><span className="heavy">National Median Salary:</span><span id="nat-median-value"> {careerData.nat_a_median}</span></li>
				    			<li><span className="heavy"> Region Median Salary:</span> <span id="st-median-value"> {careerData.st_a_median}</span></li>
				    			<li><span className="heavy">Degree Requires:</span> <span id="education-value"> {careerData.education}</span></li>
				    			<li><span className="heavy">Experience Needed:</span> <span id="experience-value"> {careerData.experience}</span></li>
				    		</ul>
				    	</div>
				    </div>
				   	{ saveButton }
    			</section>
    		</div>

			)
	}

}


const mapStateToProps= state=>({
	searchCareerResults : state.exploreReducer.searchCareerResults, 
	user : state.exploreReducer.user, 
	message : state.exploreReducer.message
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postCareerData : actions.postCareerData
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CareerOutput)