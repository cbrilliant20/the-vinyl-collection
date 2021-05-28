import { useState, useEffect } from "react"
import "./Products.css"
import Layout from "../../components/Layout/Layout"
import Search from "../../components/Search/Search"
import Sort from "../../components/Sort/Sort"
import { AZ, ZA } from "../../utils/sort"
import { getProducts } from "../../services/products"
import ProductCards from "../../components/ProductCards/ProductCards"
import ProductCard from "../../components/ProductCard/ProductCard"

const Products = (props) => {
  const [products, setProducts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState("artist-ascending")

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
      setSearchResult(allProducts)
    }
    fetchProducts()
  }, [])

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case "artist-ascending":
        setSearchResult(AZ(searchResult))
        break
      case "artist-descending":
        setSearchResult(ZA(searchResult))
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.artist.toLowerCase().includes(event.target.value.toLowerCase())
    )
    console.log(results)
    setSearchResult(results)
    setApplySort(true)
  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="products">
        <ProductCards />
      </div>
    </Layout>
  )
}

export default Products
