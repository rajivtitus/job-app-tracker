import React from 'react'
import {Switch, Route} from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
