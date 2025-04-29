// import { useState } from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { HeroText } from './components/heroText'

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
              <HeroText />
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