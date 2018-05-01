import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './nav';
import CollegeForm from './college-form'


export default class SearchCollegesPage extends React.Component{
	render(){
		return(
			<div>
				<Navigation />
			    <section className="search-options">
			        <h1> Explore </h1>
			        <div className="row">
					    <div className="col-6 container search-careers">
					        <img src="assets/img/nasa.jpg" className="image" alt="astronaut"></img>
					            <div className="middle">
					                <div className="text"><Link to="/search-careers-page">Search Careers</Link></div>
					            </div>
					    </div>
			            <div className="col-6 container search-colleges">
			            	<CollegeForm />
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

