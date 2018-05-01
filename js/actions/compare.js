export const GET_COMPARE_DATA_SUCCESS = 'GET_COMPARE_DATA_SUCCESS';
export const getCompareDataSuccess = results => ({
	type: GET_COMPARE_DATA_SUCCESS, 
	results
})

export const GET_COMPARE_DATA_ERROR = 'GET_COMPARE_DATA_ERROR';
export const getCompareDataError = results => ({
	type: GET_COMPARE_DATA_ERROR,
	results
})

export const getCompareData = query => dispatch => {
	return fetch('https://explore-your-options.herokuapp.com/compare', {

            method: 'POST',
            body: JSON.stringify(query),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(info => {
			dispatch(getCompareDataSuccess(info))
			console.log(info)
			return info
		})
		.catch(err=>{
			dispatch(getCompareDataError(err))
			const message = {
				message: err
			}
			return message;
		})

}