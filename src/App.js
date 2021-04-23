import React, {useEffect} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import GlobalStyle from './styles/GlobalStyle'
import Login from './components/Login/Login'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import JobAppsList from './components/Applications/JobAppsList'
import JobAppDetails from './components/Applications/JobAppDetails'
import Favorites from './components/Favorites/Favorites'
import {getJobApps} from './actions/jobAppActions'
import {getQuotes} from './actions/quoteActions'
import * as actionTypes from './constants/actionTypes'
import GuardedRoute from './components/GuardedRoute'

function App() {
  const {user: {token} } = useSelector(state => state)
  const dispatch = useDispatch();

    
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

  }, [token, dispatch])


  return (
    <BrowserRouter>
      <GlobalStyle />
      <GuardedRoute component={Nav} authToken={token}/>
      <Switch>
        <Route exact path='/' component={Login} />
        <GuardedRoute exact path='/dashboard' component={Dashboard} authToken={token}/>
        <GuardedRoute exact path='/job-apps' component={JobAppsList}  authToken={token}/>
        <GuardedRoute exact path='/job-apps/:id' component={JobAppDetails}  authToken={token}/>
        <GuardedRoute exact path='/favorites' component={Favorites} authToken={token}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
