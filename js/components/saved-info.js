import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Navigation from './nav';
import history from '../history'

import * as actions from '../actions/saved-info';
import * as compareData from '../actions/compare';
import * as deleteAction from '../actions/delete-info';
import * as message from '../actions/display-message'
import RenderSavedCareerData from './saved-info-data';
import RenderSavedCollegeData from './saved-college-data';
import Modal from './modal'

export class SavedInfo extends React.Component{

	constructor(props) {
  		super(props);
  		this.state = { 
  			isOpen : false,
  			query: '', 
  			career : '', 
  			category : '' }
  		this.deleteInfo = this.deleteInfo.bind(this);
  		this.toggleModal = this.toggleModal.bind(this)
	}

	toggleModal(value){
		this.setState({
			isOpen : !this.state.isOpen,
			query: value.query, 
			category : value.category
		})
	}

	componentWillMount(){
		this.props.dispatch(actions.getUserData({ user: this.props.user}))
	}


	onSubmit(values){
		return this.props.dispatch(compareData.getCompareData(values))
		.then((res)=>{
			history.push('/compare')
		})
	}

	deleteInfo(value){
			return this.props
			.dispatch(deleteAction.deleteInfoCall(value))
			.then((res)=>{ 
				if(res.message===204) {
				this.props.dispatch(actions.getUserData({ user: this.props.user}))
				this.props.dispatch(message.displayMessageTimer('Item Deleted'))
			    }
			})
			
	}


	render(){
		const careers = this.props.userSavedData[1]
		const colleges = this.props.userSavedData[0]

		return(
			<div>
				<Navigation />
				    <section className="saved-options">
						<div className="row">
							<div className="col-12">
								<h1> Saved Info </h1>
								<p className="divide"> select one career and one college to compare return on investment </p>
					
						 		<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
								)}> 
									<p className="divide orange"> careers </p>
									{ colleges ? <RenderSavedCareerData careers={careers} deleteInfo={this.deleteInfo} toggleModal={this.toggleModal}/> : null}
									<p className="divide orange"> colleges</p>
									{ colleges ? <RenderSavedCollegeData colleges={colleges} deleteInfo={this.deleteInfo} toggleModal={this.toggleModal}/> : null}
		                		<button
		                    		type="submit"
		                    		disabled={this.props.pristine || this.props.submitting}>
		                    		Submit
		                		</button>
		                		</form>
		                	</div>
						</div>
					</section>
					<Modal show={this.state.isOpen}
			          onClose={this.toggleModal}
			          query={this.state.query}
			          category={this.state.category} >
        			</Modal>
			</div>
			)
		}
		

	}


	const mapStateToProps = state => ({
		user : state.exploreReducer.user, 
		userSavedData : state.exploreReducer.userSavedData
	})

SavedInfo = connect(mapStateToProps)(SavedInfo)

export default reduxForm({
	form: 'compare'
})(SavedInfo)


