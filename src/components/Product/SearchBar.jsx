const SearchBar = () =>{
    return (
        <form>
          <input type="text" placeholder="Buscar..." />
          <label>
            <input type="checkbox" />
            {' '}
            Mostrar solo productos en stock
          </label>
        </form>
      );
}

export default SearchBar