import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="d-flex align-items-center" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </div>
    )
}

export default SearchBar