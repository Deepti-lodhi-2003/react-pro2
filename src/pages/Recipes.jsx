import React from 'react'
import {Link} from 'react-router-dom'

const Recipes = () => {
  return (
    <div>
      <Link className='bg-green-400 px-4 py-2 rounded absolute right-[10%]' to="/recipes/create-recipe">Create Recipe</Link>
    </div>
  )
}

export default Recipes