import "./Sort.css"

const Sort = (props) => {
  const handleSort = (event) => {
    props.handleSort(event.target.value)
  }

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">SORT BY:</label>
      <select className="sort" onChange={handleSort}>
        <option className="option" value="artist-ascending">
          &nbsp; Artist, A-Z &nbsp;
        </option>
        <option value="artist-descending">&nbsp; Artist, Z-A &nbsp;</option>
      </select>
    </form>
  )
}

export default Sort
