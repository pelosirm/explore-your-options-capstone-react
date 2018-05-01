import React from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import  * as actions from '../actions';
import * as message from '../actions/display-message'
import history from '../history';

export class CollegeForm extends React.Component {


	componentWillMount(){
    	this.props.dispatch(actions.getCollegeInputCall())
  
  	}


  	onFormChange(e) {
  		const { name } = e.target
  		if(name === 'region'){
  			this.props.dispatch(change('collegeSelect', 'state', null))
  		} else if ( name === 'state'){
  			this.props.dispatch(change('collegeSelect', 'region', null))
  		}
	}

	onSubmit(values){
		let querySet = values 
		querySet.speciality = '01'+values.speciality
		this.props.dispatch(message.loadingTrue())
		return this.props.dispatch(actions.getCollegeQueryCall(querySet))
		.then((res)=>{
			this.props.dispatch(message.loadingFalse())
			history.push(`/college-results`)
		})
	}

	render(){

		const searchRegion = this.props.searchRegionInput.map((region,index)=>(
			<option value={region.CODE} key={index}> {region.REGION} </option>
		))

		let alphaSortPrograms = this.props.searchProgramInput.sort(function(a, b){
		    if(a.PROGRAM < b.PROGRAM) return -1;
		    if(a.PROGRAM > b.PROGRAM) return 1;
		    return 0;
		})

		const searchProgram=alphaSortPrograms.map((program,index)=>(
			<option value={program.PROGRAM} key={index}> {program.PROGRAM} </option>
		));

		let alphaSortState = this.props.searchStateInput.sort(function(a, b){
		    if(a.State < b.State) return -1;
		    if(a.State > b.State) return 1;
		    return 0;
		})

		const searchStateInput=alphaSortState.map((state,index)=>(
			<option value={state.Abbreviation} key={index}>{state.State}</option>
		));


		return(
			<form className="form-search-colleges"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
						)} onChange={(e)=>this.onFormChange(e)}>
			            		<legend> Search Colleges </legend>
			            		<div className="center-on-page">
			            			<div className="select">
			            				<Field 
											name="degree"
											component="select"
											type="select"
											valuefield="value"
											textfield="degree">
											<option>Select Degree</option>
											<option value="2">Associates</option>
											<option value="3,4">Bachelors</option>
										</Field>
									</div>
									<div className="select">
										<Field 
											name="speciality"
											component="select"
											type="select"
											valuefield="value"
											textfield="program">
											<option>Select Speciality</option>
											{ searchProgram }
										</Field>
									</div>
									<div className="select">
										<Field 
											id="region-select"
											name="region"
											component="select"
											type="select"
											valuefield="value"
											textfield="region">
											<option value='undefined'> Select Region </option>
											{ searchRegion }
										</Field>
									</div>
									<div className="select">
										<Field 
											id="state-select"
											name="state"
											component="select"
											type="select"
											valuefield="value"
											textfield="state">
											<option value='undefined'> Select State </option>
											{ searchStateInput }
										</Field>
									</div>
								</div>
								<button
		                    		type="submit"
		                    		disabled={this.props.pristine || this.props.submitting}>
		                    		Submit
		                		</button>
						</form>
					)
	}

}


const mapStateToProps = state => ({ 
    searchRegionInput : state.exploreReducer.searchRegionInput, 
    searchStateInput : state.exploreReducer.searchStateInput, 
    searchProgramInput : state.exploreReducer.searchProgramInput, 
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
     	change : change
    }, dispatch)
  };
}


CollegeForm = connect(mapStateToProps,mapDispatchToProps)(CollegeForm);

export default reduxForm({
	form: 'collegeSelect'
})(CollegeForm)

