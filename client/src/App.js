import React, {useState }from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import './App.scss'
import Shop from './components/Shop/Shop'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SinglePlantView from './components/PlantView/SinglePlantView'
import usePlants from './hooks/usePlants'
import Footer from './components/Footer/Footer'


const App = () => {
  const [ cart, setCart ] = useState([])
  const {plants, loading} =  usePlants()
  if(loading){
    return <p> fetching data...</p>
  }

  function addToCart(id) {
    if(cart.find( (product) => product.id === id )) {
      changeQuantity("increment", id)
    } else{
      const plant = plants.find( product => product.id === id)
      const plantObject = { ...plant, quantity: 1}
      setCart([...cart,
        plantObject
      ])
    }
  }

  function changeQuantity(action, id) {
    console.log("im here")
    cart.map(( item) => {
      console.log(action)
      if(item.id === id) {
        console.log(id, 'the id')
        if( action === "decrement") {
        }
        if( action === "increment") {
          let newQuantity = item.quantity +1
          console.log(item.quantity, 'the quantity before adding')
          console.log('incrementing', newQuantity)
          setCart( cart.map((product) => product.id === id ? { ...product, quantity: newQuantity} : product))
        }
      }
     
    })
    console.log(cart)
  }

  return (
    <Router>
      <div className="app__container">
        <NavBar cart = {cart}/>
        <Routes>
          <Route path = "/" element = {<Header />} exact />
          <Route path = "*" element = {<Header />} exact />
          <Route path = "/plants" element = {<Shop addToCart = {addToCart}/>} replace = "true"/>
          <Route path = "/plants/:id" element = {< SinglePlantView addToCart = {addToCart} />} replace = "true"/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
