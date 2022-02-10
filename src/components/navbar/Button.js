import React from 'react'
import {Link} from 'react-router-dom'

const Button = () => {
  return (
    <Link to="signup">
        <button className="btn">S'inscrire</button>
    </Link>
  )
}

export default Button