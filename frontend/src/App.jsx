import { Header } from './components/header'
import { Search } from './components/search'
import { About } from './pages/about'
import { TC } from './pages/tc'

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
          <Route exact path = '/' element = {<Search />} />
          <Route exact path = '/about' element = {<About />}/>
          <Route exact path = '/terms&conditions' element = {<TC />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App