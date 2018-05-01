import React from 'react';
import { Field } from 'redux-form';

const RenderSavedCareerData = (props)=> {
	const category = "career"
	const savedCareer =props.careers.map((career,index)=>(
		<label key={index} className='custom-radio'> { career.career }
			<Field name="career" component="input" type="radio" value={career._id}/>
			<span className="delete"
				  onClick={()=>props.toggleModal({"query": career,"category":category})}>
					<i class="fas fa-info"></i>
			</span>
			<span className="delete" onClick={()=>props.deleteInfo({"id": career._id,"category" :category})}>
				<i class="fas fa-times"></i>
			</span>
			<span className="checkmark"></span>
		</label>
	));

	return savedCareer
}

export default RenderSavedCareerData
