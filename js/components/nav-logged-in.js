import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUserRedirect } from '../actions/user';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import history from '../history'

export class NavLoggedIn extends React.Component{
   
    handleOnClick(){
        this.props.logoutUserRedirect()
        history.push('/')
    }

    render(){

	return(

		<div>
		        <li className="right">
                    <a href="#" className="nav-signout" onClick={()=>this.handleOnClick()}>signout</a>
                </li>
                <li className="right">
                    <Link to="/saved-info" className="nav-saved">my saved info</Link>
                </li>
                <li className="right">
                    <Link to="/search-page" className="nav-search">search</Link>
                </li>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUserRedirect: logoutUserRedirect
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLoggedIn);