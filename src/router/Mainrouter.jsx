import React from 'react'
import { Route, Router } from 'react-router-dom'

import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import Create from '../pages/Create'
import Update from '../pages/Update'
import Favorites from '../pages/Favorite'
import About from '../pages/About'
import PageNotFound from '../pages/PageNotFound'

const Mainrouter = () => {
  return (
    <Router>
        <Route path='/' element = {<Home/>}/>

        <Route path='/recipes' element = {<Recipe/>}/>
        <Route path='/recepies/create-recipe' element = {<Create/>}/>
        <Route path='/recepies/update-recipe/:id' element = {<Update/>}/>

        <Route path='/favorites' element = {<Favorite/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='*' element = {<PageNotFound/>}/>

    </Router>
  )
}

export default Mainrouter