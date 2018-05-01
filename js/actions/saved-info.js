export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const getUserDataSuccess = results => ({
	type: GET_USER_DATA_SUCCESS, 
	results
})

export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';
export const getUserDataError = results => ({
	type: GET_USER_DATA_ERROR,
	results
})

export const getUserData = user => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/user-saved-info', {

            method: 'POST',
            body: JSON.stringify(user),
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
        	console.log(response)
        	debugger
			dispatch(getUserDataSuccess(response))
			return response
		})

}