import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navigation from './nav'
export class Compare extends React.Component{

	render(){
		let results = this.props.compareResults

		return(
			<div>
				<Navigation />
				<section className="comparison">
					<div className="row">
						<div className="col-12">
							<p><span className="light">as a </span><span className="heavy emphasis orange">{results.career}</span>
								<br></br>
								<span className="light"> attending</span>
								<span className="heavy emphasis orange"> {results.college} </span>
							</p>
							<p><span className="light"> return on investment over 20 years: </span>
								<br></br>
								<span className="heavy emphasis orange">{results.ROI}</span>
							</p>
						</div>
					</div>
					<p className="new-search center back"><Link to='/saved-info'> back </Link>
					</p>
				</section>
			</div>

		)
	}
}

const mapStateToProps = state => ({
	compareResults : state.exploreReducer.compareResults
})

Compare = connect(mapStateToProps)(Compare);

export default Compare


