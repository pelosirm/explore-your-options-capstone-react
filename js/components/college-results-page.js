import React from 'react';
import { connect } from 'react-redux';

import Navigation from './nav';
import College from './college';

export class CollegeResults extends React.Component{
	
	componentDidMount(){
		window.scrollTo(0,0);
	}

	render() {
		const colleges=this.props.searchCollegeResults
		let items=colleges.map(college=>{
			return <College college={college} key={college._id}/>
		})

		let noItems = (<p> No results for search </p>)

		return(
			<div>
				<Navigation />
					<div className='college-results'>
						<h1>Search Results </h1>
						<div className="row">
						{ items ? null : noItems }
						{ items }
						</div>
					</div>
			</div>

			) 
	}
}

const mapStateToProps=state=> ({
	searchCollegeResults : state.exploreReducer.searchCollegeResults
})

export default connect(mapStateToProps)(CollegeResults)