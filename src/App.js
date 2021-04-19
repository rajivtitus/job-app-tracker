import React, {useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import GlobalStyle from './styles/GlobalStyle'
import Login from './components/Login'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import JobApplications from './components/JobApplications/JobApplications'
import JobAppDetails from './components/JobApplications/JobAppDetails'
import Favorites from './components/Favorites'
import {getJobApps} from './actions/jobAppActions'
import {getQuotes} from './actions/quoteActions'
import * as actionTypes from './constants/actionTypes'

function App() {
  const {user: {token} } = useSelector(state => state)
  const dispatch = useDispatch();
  const history = useHistory();  
    
  useEffect(() => {
    if (token) {
      dispatch(getJobApps());
      dispatch(getQuotes());
    } 
    else if (localStorage.getItem('user')) {
      dispatch({
        type: actionTypes.SET_USER
      })
    } 
    else {
      history.push('/')
    }
  }, [token, dispatch])


  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/job-apps' component={JobApplications} />
        <Route exact path='/job-apps/:id' component={JobAppDetails} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
    </>
  );
}

export default App;
