# react-mockup

> Create simple mockups with a single react component

[![NPM](https://img.shields.io/npm/v/react-mockup.svg)](https://www.npmjs.com/package/react-mockup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mockup
```

## Usage

```jsx
import React, { Component } from 'react'

import {MobileMockup, BrowserMockup} from 'react-mockup'
import 'react-mockup/dist/index.css'

function Component {
  return(
    <>
      // Displays image in a mobile device frame
      <MobileMockup
        size="1"
        src="" />

      // Displays image in a browser device frame
      // Their are 2 styles you could insert in the `types=""`, `mac` and `outline`. (Support for more will come soon)
      <BrowserMockup
        src=""
        type=""
        angleX=""
        angleY=""
        color=""
      />
    </>
  )
}
```

## License

MIT © [](https://github.com/)
