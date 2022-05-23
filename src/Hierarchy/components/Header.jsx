import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{backgroundColor:'#201E37',color:'azure', height:'50px',position:'sticky'}}>
      <Link to={'/'} style={{textDecoration:'none',color:'azure'}}>  <h1 style={{margin:'auto',marginLeft:'100px'}}>Commutatus</h1> </Link>
    </div>
  )
}

export default Header