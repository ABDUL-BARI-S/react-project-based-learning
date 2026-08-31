import React from 'react'
import { useState } from 'react'
import Products from '../data/products';


function Search() {
    const [searchText, setSearchText] = useState("");
   
  const filteredProducts = Products.filter((product) => {
    return (
    product.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
  )
  });

  return (
    <div className='search-container'>  
      <h1>Search for Products...</h1>
          <input type="text"
            placeholder='Search here'
            style={{
              margin: "10px",
              padding: "10px",
              fontSize:"20px",
            }}
            value={searchText}
            onChange={ (e) => { 
              setSearchText(e.target.value)
            }}
          />
           <ul>
              { searchText.length !== 0 &&
                  filteredProducts.map((product) => {
        return (
         <>
       <li key={product.id}>{product.name}</li>
</>
        )
        
      
      })}
       </ul>

    </div>
  )
}

export default Search