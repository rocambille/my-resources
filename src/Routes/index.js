import React from 'react'
import {Redirect} from 'react-router-dom'

import Resources from './Resources'

const Routes = () => (
  <>
    <Redirect from='/' to='/resources'/>
    <Resources />
  </>
)

export default Routes
