import React from 'react';
import { Link } from 'react-router-dom'

const College=({ college }) => (


	<div className="col-3">
       	<p><span className="heavy emphasis">{college.INSTNM}</span><br></br><span className="light"> {college.CITY}, {college.STABBR}</span></p>
       	<ul>
        	<li><span className="heavy">Average Annual Cost:</span> ${college.NPT4}</li>
        	<li><span className="heavy"> Graduation Rate:</span> {Math.round(college.C150_L4_POOLED_SUPP * 100)}% </li>
       		<li><span className="heavy">Average Debt:</span> ${college.GRAD_DEBT_MDN_SUPP}</li>
       	</ul>
       	<p className="more-details heavy"><Link to={`/college-results/${college._id}`}>More Details</Link> </p>
    </div>
)

export default College 