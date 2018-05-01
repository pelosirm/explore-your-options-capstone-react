import React from 'react';
import { Field } from 'redux-form';

const RenderSavedCollegeData = (props)=> {
	const category = "college"
	const savedCollege =props.colleges.map((college,index)=>(
		<label key={index} className='custom-radio'> { college.INSTNM }
			<Field name="college" component="input" type="radio" value={college._id}/>
			<span className="checkmark"></span>
			<span className="delete"
				  onClick={()=>props.toggleModal({"query": college.ORIGINALID,"category":category})}>
					<i className="fas fa-info"></i>
			</span>
			<span className="delete" onClick={()=>props.deleteInfo({"id": college._id,"category" :category})}>
				<i className="fas fa-times" ></i>
			</span>
			
		</label>
	
	));

	return savedCollege;

}


export default RenderSavedCollegeData 
