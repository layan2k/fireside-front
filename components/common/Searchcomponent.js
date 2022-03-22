import styled from 'styled-components'

const Search = styled.div`
margin-bottom: 15px;
width : 25%;
margin-left: 480px;
margin-right: 480px;
`

import React from 'react'

const Searchcomponent = ({Query, setQuery}) => {

  return (
    <>
<Search className="input-group">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  style={{"backgroundColor":"#e6e6e6"}} onChange={(e) => setQuery(e.target.value)} />
  <button type="button" className="btn btn-outline-primary" style={{"border":"#e6e6e6 solid 1px", "color":"#e6e6e6"}}>Search</button>
</Search>
    </>
  )
}

export default Searchcomponent