import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Navbar from './Components/Navbar'

import Routes from './Routes'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes />
  </BrowserRouter>
)

export default App
