import React from 'react'

import { MobileMockup, WindowMockup, BrowserMockup } from 'react-mockup'
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
      <WindowMockup
        src=""
        type="chrome"
        // angleX="5deg"
        // angleY="10deg"
        // buttonColor="white"
        shadow="none"
        // border="none"
        color="white"
      />
      <BrowserMockup
        src=""
        type="chrome"
        // angleX="5deg"
        // angleY="10deg"
        accentColor="orange"
        urlValue="prattle.vercel.app"
        // shadow="none"
        // border="none"
        color="black"
      />
    </>
  )
}

export default App
