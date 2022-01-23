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
        // type=""
        // angleX="5deg"
        // angleY="10deg"
        accentColor="black"
        shadow="none"
        // border="none"
        color="white"
      />
      <BrowserMockup
        src=""
        // type=""
        // angleX="5deg"
        // angleY="10deg"
        accentColor="black"
        urlValue="prattle.vercel.app"
        // shadow="none"
        // border="none"
        color="white"
      />
    </>
  )
}

export default App
