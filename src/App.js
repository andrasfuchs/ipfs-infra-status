import React, { Fragment } from 'react'

import Header from './components/Header'
import GatewayList from './components/GatewayList'

const App = () =>
  <Fragment>
    <div class='sans-serif'>
      <Header />
      <GatewayList />
    </div>
  </Fragment>

export default App
