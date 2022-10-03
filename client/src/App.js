import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import './App.scss'
import Shop from './components/Shop/Shop'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import SinglePlantView from './components/PlantView/SinglePlantView'
import usePlants from './hooks/usePlants'
import Footer from './components/Footer/Footer'
import OrderPage from './components/OrderPage/OrderPage'

const App = () => {
  const [cart, setCart] = useState([])
  const { plants, loading } = usePlants()
  if (loading) {
    return <p> fetching data...</p>
  }

  function handleDelete(id) {
    const itemToDelete = plants.find((product) => product.id === id)

    if (itemToDelete) {
      setCart((currItems) => {
        return currItems.filter((item) => item.id !== id)
      })
    }
  }

  function addToCart(id, quantity) {
    if (cart.find((product) => product.id === id)) {
      changeQuantity('increment', id, quantity)
    } else {
      const plant = plants.find((product) => product.id === id)
      const plantObject = { ...plant, quantity: quantity }
      setCart([...cart, plantObject])
    }
  }

  function changeQuantity(action, id, quantity) {
    cart.map((item) => {
      console.log(action)
      if (item.id === id) {
        console.log(id, 'the id')
        if (action === 'decrement') {
          if (item.quantity === 1) {
            handleDelete(item.id)
            return <></>
          }
          let newQuantity = item.quantity - quantity
          setCart(
            cart.map((product) =>
              product.id === id
                ? { ...product, quantity: newQuantity }
                : product
            )
          )
        }
        if (action === 'increment') {
          let newQuantity = item.quantity + quantity
          setCart(
            cart.map((product) =>
              product.id === id
                ? { ...product, quantity: newQuantity }
                : product
            )
          )
        }
      }
    })
  }

  return (
    <Router>
      <div className="app__container">
        <NavBar
          cart={cart}
          handleDelete={handleDelete}
          changeQuantity={changeQuantity}
        />
        <Routes>
          <Route path="/" element={<Header />} exact />
          <Route path="*" element={<Header />} exact />
          <Route
            path="/plants"
            element={<Shop addToCart={addToCart} />}
            replace
          />
          <Route
            path="/plants/:id"
            element={<SinglePlantView addToCart={addToCart} />}
            replace
          />
          <Route
            path="/cart"
            element={
              <OrderPage
                cart={cart}
                changeQuantity={changeQuantity}
              />
            }
            replace
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
