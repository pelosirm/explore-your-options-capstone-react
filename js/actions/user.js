export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const createUserSuccess = (results,username) => ({
	type: CREATE_USER_SUCCESS, 
	results, 
	username
})

export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const createUserError = results => ({
	type: CREATE_USER_ERROR,
	results
})



export const createUser = user => dispatch => {
	return fetch('https://explore-your-options.herokuapp.com/users/create', {
            method: 'POST',
            body: JSON.stringify(user),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(response => {
			dispatch(createUserSuccess(response,user.username))
			return response
		}).catch(err=>{
			dispatch(createUserError(err))
			const message = {
				message: err
			}
			return message;
		})
}


export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = (results,username) => ({
	type: LOGIN_USER_SUCCESS, 
	results, 
	username
})

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUserError = results => ({
	type: LOGIN_USER_ERROR,
	results
})



export const loginUser = user => dispatch => {
	return fetch('https://explore-your-options.herokuapp.com/users/login', {
            method: 'POST',
            body: JSON.stringify(user),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(response => {
			dispatch(loginUserSuccess(response,user.username))
			return response
		}).catch(err=>{
			dispatch(loginUserError(err))
			const message = {
				message: err
			}
			return message;
		})

}

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
	type: LOGOUT_USER
})

export const logoutUserRedirect = () => dispatch => {
	 dispatch(logoutUser())

}