// import { useState } from 'react'
import {TextInput} from './components/textInput'
import {Header} from './components/header'
import {Footer} from './components/footer'
import {HeroText} from './components/heroText'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path = '/' element = {
            <>
              <HeroText/>
              <TextInput/>
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