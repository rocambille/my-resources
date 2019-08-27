import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Navbar from './components/Navbar'

import Index from './routes/Index'
import Resources from './routes/Resources'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Index />
    <Resources />
  </BrowserRouter>
)

export default App
