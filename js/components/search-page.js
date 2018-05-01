import React from "react";
import { Link } from "react-router-dom";

import Navigation from './nav';

export default class SearchPage extends React.Component {
	render() {
	return (
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
			                	<img src="assets/img/books.jpg" className="image" alt="books"></img>
			                	<div className="middle">
			                   		<div className="text"><Link to="/search-colleges-page">Search Colleges</Link></div>
			                	</div>
			            	</div>
			       		</div>
			    	</section>
			   </div>
	)
  }
}

