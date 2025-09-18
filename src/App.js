import './App.css';
import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'

const API = "https://fakestoreapi.com/products"

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  //Fetch product data
  const fetchProducts = async () => {
    try {
      const response = await fetch(API)
      const data = await response.json()

      setProducts(data)
    } catch (err) {
      console.error("Could not fetch products data", err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Search or Filter through the products
  const searchProducts = products.filter((prod) => prod.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        <div className="products">
          {
            searchProducts.map((product) => (
              <ProductCard product = {product} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
