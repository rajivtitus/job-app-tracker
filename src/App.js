import React, {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import GlobalStyle from './styles/GlobalStyle'
import Login from './components/Login'
import Nav from './components/Nav'
import Home from './components/Home/Home'
import JobApplications from './components/JobApplications/JobApplications'
import Favorites from './components/Favorites'
import {getJobApps} from './actions/jobAppActions'
import {getQuotes} from './actions/quoteActions'

function App() {
  const {userProfile: {token} } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getJobApps());
      dispatch(getQuotes());
    } 
  }, [token, dispatch])


  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/job-apps' component={JobApplications} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
    </>
  );
}

export default App;
