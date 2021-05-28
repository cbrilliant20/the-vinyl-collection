import { useState, useEffect } from "react"
import "./Products.css"
import { Layout, Search, Sort } from "../../components"
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"
import { getProducts } from "../../services/products"
import ProductCards from "../../components/ProductCards/ProductCards"

const Products = (props) => {
  const [products, setProducts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState("name-ascending")

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
      case "name-ascending":
        setSearchResult(AZ(searchResult))
        break
      case "name-descending":
        setSearchResult(ZA(searchResult))
        break
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult))
        break
      case "price-descending":
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
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
