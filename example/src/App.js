import React from 'react'

import { MobileMockup, WindowMockup, BrowserMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'

const App = () => {
  // const frameData={
  //   background: 'gray',
  //   border: '1px solid #000000',
  //   size: '10px',
  //   borderRadius: '50px'
  // }
  return (
    <>
      <MobileMockup
        size="1"
        src=""
        angleX="5deg"
        angleY="10deg"
        // shadow="none"
        border="none"
        />
      <WindowMockup
        src=""
        type="chrome"
        windowControlPosition="right"
        angleX="5deg"
        angleY="10deg"
        accentColor="black"
        shadow="none"
        windowName="react-mockup-example"
        // border="none"
        color="white"
      />
      <BrowserMockup
        src=""
        type="default"
        windowControlPosition="right"
        // angleX="5deg"
        // angleY="10deg"
        // frameData={frameData}
        accentColor="black"
        urlValue="react-mockup-example"
        // shadow="none"
        // border="none"
        color="white"
      />
    </>
  )
}

export default App
