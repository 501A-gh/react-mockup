import React from 'react'

import { MobileMockup, BrowserMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'

const App = () => {
  return (
    <>
      <MobileMockup
        size="1"
        src="" />
      <BrowserMockup
        src=""
        type=""
        angleX="5deg"
        angleY="10deg"
        color="white"
      />
    </>
  )
}

export default App
