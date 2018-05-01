import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import DisplayMessage from './message';
import Navigation from './nav';

import * as actions from '../actions';
import * as message from '../actions/display-message';
import * as post from '../actions/save-data';


export class CollegeDetails extends React.Component {
	
	componentDidMount(){
		window.scrollTo(0,0);
	}

	constructor(props) {
    	super(props);
    	this.state = { 
    		costDetails: false,
    		programDetails: false
    	};
    	this.handleCostClick = this.handleCostClick.bind(this);
    	this.handleProgramClick = this.handleProgramClick.bind(this);
    }
    

  	handleCostClick() { 
    	this.setState(prevState => ({
      		costDetails: !prevState.costDetails,
    	}));
  	}

  	handleProgramClick() {
    	this.setState(prevState => ({
      		programDetails: !prevState.programDetails,
    	}));
  	}

	componentWillMount(){
    	if(this.props.modal){
    		this.props.dispatch(actions.getCollegeDetailQueryCall(this.props.query.id))
    	 }else {
    		this.props.dispatch(actions.getCollegeDetailQueryCall(this.props.match.params.id))
    	}
  	}

  	saveInfo(e){
  		return this.props
  		.dispatch(post.postCollegeDetailData({id:this.props.match.params.id, user:this.props.user, degree:this.props.degreeValue}))
  		.then((res)=>this.props.dispatch(message.displayMessageTimer(res)))
  	}

	render() {
		const college = this.props.college
		const tags = this.props.college.tags
		const speciality = this.props.college.speciality
		let tagString = ''
		let top5Programs = []
		let otherPrograms = []
		const message = this.props.message

		const saveButton = 
			(
				<div>
					<div className="col-12">
					    <button className="save-college-btn" onClick={(e)=>this.saveInfo()}> Save College</button>
					</div>
					<div className="col-12">
					    <p className="return-to-search new-search center"><Link to='/college-results'> return to search </Link></p>
					</div>
				</div>
			)

		if(tags){
			for(let i=0; i<tags.length; i++){
		    	if(i !== (tags.length-1))  {
		    		tagString += `${tags[i]}  | `
		    	} else {
		    		tagString += `${tags[i]}`
		    	}
		    }
		}

		if(speciality){
		    for(let i=0;i<5; i++){
		    	top5Programs.push(<li key={i}>{i+1}. {speciality[i][0]} - {speciality[i][1]}% </li>)
		    }

		    for(let i=5; i<speciality.length;i++){
		    	if(speciality[i][1] !== 0) {
		    		otherPrograms.push(<li key={i}> {speciality[i][0]} </li>)
		    	}
		    	
		    }
		}

	return (
		<div>
			<Navigation />
			{ message ? <DisplayMessage message={message} /> : null}
				<section className="college-more-detail">
					<div className="row career-column">
						<div className="col-12">  
						<p><span className="heavy emphasis">{college.INSTNM}</span><br></br><span className="light"> {college.CITY}, {college.STABBR}</span><br></br>{college.UGDS} undergraduate students</p>
			  			<ul>
			  				<li><span className="heavy"> School Details: </span>
			  				{ tagString }
							</li>
							<li><span className="heavy">Average Annual Cost:</span> ${college.NPT4}</li>
			    			<li><span className="heavy"> Graduation Rate:</span> {Math.round(college.C150_L4_POOLED_SUPP*100)} %</li>
			    			<li><span className="heavy">Average Debt:</span> ${college.GRAD_DEBT_MDN_SUPP}</li>
			    		</ul>
			   				<button className="accordion" onClick={this.handleCostClick}>
			    				<i className="fa fa-chevron-down" aria-hidden="true"></i> Cost Details </button>
			    			<div className="panel" style={{ display : this.state.costDetails? 'block' : 'none' }}>
			    				<p> Average annual cost by income bracket </p>
			    				<table>
			  							<thead>
			  								<tr>
			   									<th>Income Level</th>
			 									<th>Cost</th>
			 								</tr>
			    						</thead>
			    						<tbody>
				   						 	<tr>
				    							<td><span className="heavy"> Average Annual Cost : </span></td>
				    							<td>${college.NPT4} </td>
				    						</tr>
				    						<tr>
				    							<td><span className="heavy"> $0 - $30,000 : </span> </td>
				    							<td>${college.NPT41} </td>
				    						</tr>
				    						<tr>
				    							<td><span className="heavy"> $30,001-$48,000 : </span></td>
				    							<td>${college.NPT42}</td>
				    						</tr>
				    						<tr>
				    							<td><span className="heavy"> $48,001-$75,000 : </span></td>
				    							<td>${college.NPT43} </td>
				    						</tr>
				    						<tr>
				    							<td><span className="heavy"> $75,001-$110,000 : </span> </td>
				    							<td>${college.NPT44} </td>
				    						</tr>
				    						<tr>
				    							<td><span className="heavy"> $75,001-$110,000 : </span> </td>
				    							<td>${college.NPT45} </td>
				    						</tr>
				    					</tbody>
									</table>
			    			</div>
			    			<button className="accordion" onClick={this.handleProgramClick}><i className="fa fa-chevron-down" aria-hidden="true"></i> Program Details </button>
			    			<div className="panel" style={{ display : this.state.programDetails ? 'block' : 'none' }}>
			    				<p> Most Popular Programs</p>
			    				{ top5Programs }
								<p> Other Programs Offered </p>
								{ otherPrograms }
							</div>
						</div>
			    		{ this.props.modal ? null : saveButton }
			   		</div>
	   	</section>
   	</div>
	)
  }
}


const mapStateToProps = state => ({
	college : state.exploreReducer.collegeDetail, 
	user: state.exploreReducer.user, 
	message : state.exploreReducer.message,
	degree : state.exploreReducer.degreeValue
})

export default connect(mapStateToProps)(CollegeDetails)

