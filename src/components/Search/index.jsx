import './Search.css'

export const Search = ({ handleSearchInputChange }) => {
  return (
    <div className="searchContainer">  
    <input 
    className='inputSearch'
    type="text"
    placeholder="Buscar..."
    onChange={handleSearchInputChange}
  /></div>
  )
}
