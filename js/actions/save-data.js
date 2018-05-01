import * as message from './display-message'
import history from '../history'

export const SAVE_CAREER_SUCCESS = 'SAVE_CAREER_SUCCESS';
export const saveCareerSuccess = (results) => ({
	type: SAVE_CAREER_SUCCESS, 
	results
})

export const SAVE_CAREER_ERROR = 'SAVE_CAREER_SUCCESS';
export const saveCareerError = results => ({
	type: SAVE_CAREER_ERROR,
	results
})

export const postCareerData = career => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/career/create-new', {
            method: 'POST',
            body: JSON.stringify(career),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(res => {
            if(!res.ok){
            	dispatch(message.displayMessageTimer('Oops! something went wrong'))
				return Promise.reject(res.statusText)
			}
			return res.json();
        }).then(response => {
			dispatch(saveCareerSuccess(response))
			dispatch(message.displayMessageTimer(response))
			return response
		})

}

export const SAVE_COLLEGE_SUCCESS = 'SAVE_COLLEGE_SUCCESS';
export const saveCollegeSuccess = (results) => ({
	type: SAVE_COLLEGE_SUCCESS, 
	results
})

export const SAVE_COLLEGE_ERROR = 'SAVE_COLLEGE_ERROR';
export const saveCollegeError = results => ({
	type: SAVE_COLLEGE_ERROR,
	results
})

export const postCollegeData = college => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/career/create-new', {
            method: 'POST',
            body: JSON.stringify(college),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(res => {
            if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
        }).then(response => {
			dispatch(saveCollegeSuccess(response))
			history.push('/college-results')
			return response
		})

}

export const POST_COLLEGE_SUCCESS = 'POST_COLLEGE_SUCCESS';
export const postCollegeSuccess = (results) => ({
	type: POST_COLLEGE_SUCCESS, 
	results
})

export const POST_COLLEGE_ERROR = 'POST_COLLEGE_ERROR';
export const postCollegeError = results => ({
	type: POST_COLLEGE_ERROR,
	results
})

export const postCollegeDetailData = college => dispatch => {
	return fetch('https://explore-your-options.herokuapp.com/save-info', {
            method: 'POST',
            body: JSON.stringify(college),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(response => {
			dispatch(postCollegeSuccess(response))
			let message = 'College Added'
			return message
			
		})        
		.catch(err => {
            dispatch(postCollegeError);
            let message = 'Oops something went wrong'
            return message
        });

}

