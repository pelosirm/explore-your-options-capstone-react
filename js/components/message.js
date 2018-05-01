import React from 'react';
import PropTypes from 'prop-types'

const DisplayMessage = ({ message }) =>{
	
	return (
		<div className="error-message">
            <span> { message }</span>
        </div>
        )
}

DisplayMessage.propTypes = {
	message : PropTypes.string
}

export default DisplayMessage