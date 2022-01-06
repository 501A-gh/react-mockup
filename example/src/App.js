import React from 'react'

import { MobileMockup, BrowserMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'

const App = () => {
  return (
    <>
      <MobileMockup
        size="1"
        src=""
        // angleX="5deg"
        // angleY="10deg"
        // shadow="none"
        border="none"
      />
      <BrowserMockup
        src=""
        type="outline"
        // angleX="5deg"
        // angleY="10deg"
        shadow="none"
        border="none"
        color="black"
      />
    </>
  )
}

export default App
