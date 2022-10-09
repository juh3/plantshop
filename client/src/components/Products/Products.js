import React, { useState } from 'react'
import usePlants from '../../hooks/usePlants'
import './product.scss'
import ProductGrid from './ProductGrid'

const Products = ({ addToCart }) => {
  const { plants, loading } = usePlants()
  const [ filteredByFamily, setFilteredByFamily ] = useState("")
  if (loading) {
    return <p> loading...</p>
  }
  const filterings = [
    'All',
    'Anthurium',
    'Alocasia',
    'Monstera',
    'Philodendron',
  ]

  const filterPlants= () => {
    console.log("im hree")
    console.log(document.getElementById('filter').value)
    
    const familyFilter = document.getElementById('filter').value
    if(familyFilter === 'All'){
      setFilteredByFamily([])
      console.log(filteredByFamily)
      return
    }
    setFilteredByFamily(plants.filter( n => n.family === familyFilter))
    console.log(filteredByFamily)
  }

  return (
    <div className="product__main">
      <div className="product__filter">
        <form>
          <label for="filter"> sort by:</label>
          <select id="filter" name="filter" onChange={() => {filterPlants()}}>
            {filterings.map((family, i) => (
              <option key={i} value = {family}>{family}</option>
            ))}
          </select>
        </form>
      </div>
      <ProductGrid filteredByFamily={filteredByFamily} plants = {plants} addToCart = {addToCart}/>
    </div>
  )
}
export default Products
