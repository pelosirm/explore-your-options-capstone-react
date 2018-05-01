export const GET_CAREER_INPUT = 'GET_CAREER_INPUT'; 
export const getCareerInput = results => ({
	type: GET_CAREER_INPUT, 
	results
})

export const GET_CAREER_INPUT_ERROR = 'GET_CAREER_INPUT_ERROR';
export const getCareerInputError = error => ({
	type: GET_CAREER_INPUT_ERROR, 
	error
})


export const getCareerInputCall = () => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/jobs')
		.then(res=> {
			if(!res.ok){
				return Promise.reject(res.statusText)
			}

			return res.json();
		})
		.then(results =>{
			dispatch(getCareerInput(results));
		})
		.catch(err=>{
				dispatch(getCareerInput(err))
			})
		}

export const GET_COLLEGE_INPUT = 'GET_COLLEGE_INPUT';
export const getCollegeInput = results => ({
	type : GET_COLLEGE_INPUT, 
	results
})

export const GET_COLLEGE_INPUT_ERROR = 'GET_COLLEGE_INPUT_ERROR';
export const getCollegeInputError = error => ({
	type: GET_COLLEGE_INPUT_ERROR, 
	error
})

export const getCollegeInputCall = () => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/college')
		.then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(collegeInfo => {
			dispatch(getCollegeInput(collegeInfo))
			return collegeInfo
		})
		.catch(err=>{
			dispatch(getCollegeInputError(err))
			const message = {
				message: err
			}
			return message;
		})
}

export const CAREER_QUERY_SUCCESS = 'CAREER_QUERY_SUCCESS';
export const careerQuerySuccess = (results,state) => ({
	type: CAREER_QUERY_SUCCESS, 
	results, 
	state
})

export const CAREER_QUERY_ERROR = 'CAREER_QUERY_ERROR';
export const careerQueryError = results => ({
	type: CAREER_QUERY_ERROR,
	results
})

export const getCareerQueryCall = (search) => dispatch => {
	return fetch(`https://explore-your-options.herokuapp.com/career-search/?career=${search.career}&state=${search.state}`)
		.then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(careers => {
			dispatch(careerQuerySuccess(careers,search.state))
			return careers
		})
		.catch(err=>{
			dispatch(careerQueryError(err))
			const message = {
				message: err
			}
			return message;
		})
}


export const COLLEGE_QUERY_SUCCESS = 'COLLEGE_QUERY_SUCCESS';
export const collegeQuerySuccess = (results) => ({
	type: COLLEGE_QUERY_SUCCESS, 
	results
})

export const COLLEGE_QUERY_ERROR = 'COLLEGE_QUERY_ERROR';
export const collegeQueryError = results => ({
	type: COLLEGE_QUERY_ERROR,
	results
})

export const SAVE_DEGREE_VALUE= 'SAVE_DEGREE_VALUE';
export const saveDegreeValue = degree => ({
	type: SAVE_DEGREE_VALUE,
	degree
})

export const getCollegeQueryCall = (search) => dispatch => {
	return fetch(`https://explore-your-options.herokuapp.com/college-search/?degree=${search.degree}&speciality=${search.speciality}&region=${search.region}&state=${search.state}`)
		.then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(colleges => {
			dispatch(collegeQuerySuccess(colleges))
			dispatch(saveDegreeValue(search.degree))
			return colleges
		})
		.catch(err=>{
			dispatch(collegeQueryError(err))
			const message = {
				message: err
			}
			return message;
		})
}

export const COLLEGE_DETAIL_QUERY_SUCCESS = 'COLLEGE_DETAIL_QUERY_SUCCESS';
export const collegeDetailQuerySuccess = (results) => ({
	type: COLLEGE_DETAIL_QUERY_SUCCESS, 
	results
})

export const COLLEGE_DETAIL_QUERY_ERROR = 'COLLEGE_DETAIL_QUERY_ERROR';
export const collegeDetailQueryError = results => ({
	type: COLLEGE_DETAIL_QUERY_ERROR,
	results
})

export const getCollegeDetailQueryCall = (id) => dispatch => {
	return fetch(`https://explore-your-options.herokuapp.com/search/${id}`)
		.then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(college => {
			dispatch(collegeDetailQuerySuccess(college))
			return college
		})
		.catch(err=>{
			dispatch(collegeDetailQueryError(err))
			const message = {
				message: err
			}
			return message;
		})
}