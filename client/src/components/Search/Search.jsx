import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <div className="search-container">
        <input
          className="search-input"
          value={props.value}
          onChange={(e) => props.handleSearch(e)}
          name="Search"
          placeholder="Search"
          type="text"
          autoFocus
        />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
    </form>
  )
}

export default Search
