import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import history from './history';

import FrontPage from './components/front-page'
import SearchCollegesPage from './components/search-colleges'
import SearchCareersPage from './components/search-careers'
import SearchPage from './components/search-page'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'
import CareerOutput from './components/career-output'
import PrivateRoute from './components/private-route'
import SavedInfo from './components/saved-info'
import CollegeResults from './components/college-results-page'
import CollegeDetails from './components/college-detail'
import Compare from './components/compare-results'


class App extends Component {



  render() {

    if(this.props.loading){
      return(
        <div className='center-load'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt='loading' />
        </div>
        )
    }

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <PrivateRoute exact path="/search-colleges-page" component={SearchCollegesPage} />
            <PrivateRoute exact path="/search-careers-page" component={SearchCareersPage} />
            <PrivateRoute exact path="/search-page" component={SearchPage} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <PrivateRoute exact path="/career-results" component={CareerOutput} />
            <PrivateRoute exact path="/college-results" component={CollegeResults} />
            <PrivateRoute path="/college-results/:id" component={CollegeDetails} />
            <PrivateRoute exact path="/saved-info" component={SavedInfo} />
            <PrivateRoute exact path="/compare" component={Compare} />
          </Switch>
      </div>
      </Router>
    );
  }
}

const mapStateToProps=state => ({
  loading : state.exploreReducer.loading
});

App = connect(mapStateToProps)(App);

export default App;
