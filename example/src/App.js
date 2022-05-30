import React from 'react'

import { MobileMockup, WindowMockup, BrowserMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'

const App = () => {
  const frameStyle={
    backdropFilter: 'blur(16px)',
    background:'radial-gradient(86.36% 107.55% at 6.49% 12.32%,rgba(255, 255, 255, 0.5) 0%,rgba(255, 255, 255, 0.5) 100%)',
    border:'1px solid rgba(228, 228, 228, 0.3)',
    padding:'20px',
    borderRadius:'20px',
  }

  return (
    <>
      <MobileMockup
        size="1"
        src=""
        // angleX="5deg"
        // angleY="10deg"
        shadow="none"
        // border="none"
      />
      <WindowMockup
        src=""
        type="chrome"
        windowControlPosition="right"
        // angleX="5deg"
        // angleY="10deg"
        accentColor="black"
        shadow="none"
        windowName="react-mockup-example"
        // border="none"
        color="white"
        frameStyle={frameStyle}
      />
      <BrowserMockup
        src="https://storage.googleapis.com/zenn-user-upload/29e86a5c29f0-20220527.png"
        type="default"
        windowControlPosition="right"
        angleX="1deg"
        angleY="1deg"
        accentColor="black"
        urlValue="react-mockup-example"
        // shadow="none"
        // border="none"
        color="white"
        frameStyle={frameStyle}
      />
    </>
  )
}

export default App
