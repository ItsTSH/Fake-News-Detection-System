// import { useState } from 'react'
import {Header} from './components/header'
import {Search} from './components/search'
import {Footer} from './components/footer'

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
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App