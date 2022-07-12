import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import './App.scss'
import Shop from './components/Shop/Shop'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SinglePlantView from './components/PlantView/SinglePlantView'
const App = () => {
  return (
    <Router>
      <div className="app__container">
        <NavBar />

        <Routes>
          <Route path = "/" element = {<Header />} exact />
          <Route path = "*" element = {<Header />} exact />
          <Route path = "/plants" element = {<Shop />} replace/>
          <Route path = "/plants/:id" element = {< SinglePlantView />} replace/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
