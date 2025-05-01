// import { useState } from 'react'
import {Header} from './components/header'
import {Search} from './components/search'
import {Footer} from './components/footer'
import { About } from './pages/about'
import { TC } from './pages/about'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let darkMode = true;
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path = '/' element = {
            <>
              <Search />
            </>
          }>
          </Route>
          <Route exact path = '/about' element = {<About />}/>
          <Route exact path = '/terms&conditions' element = {<TC />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App