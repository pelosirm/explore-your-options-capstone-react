
export const DELETE_INFO_SUCCESS = 'DELETE_INFO_SUCCESS';
export const deleteInfoSuccess = (results) => ({
	type: DELETE_INFO_SUCCESS, 
	results
})

export const DELETE_INFO_ERROR = 'DELETE_INFO_ERROR ';
export const deleteInfoError = results => ({
	type: DELETE_INFO_ERROR ,
	results
})

export const deleteInfoCall = (info) => dispatch => {
	return fetch('https://explore-your-options.herokuapp.com/delete-info', {
            method: 'DELETE',
            body: JSON.stringify(info),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 
            }
        })
		.then(res => {
			dispatch(deleteInfoSuccess(res))
			let success = {
				message : res.status
			}
			return success
		})
		.catch(err=>{
			dispatch(deleteInfoError(err))
			const message = {
				message: err
			}
			return message;
		})
}