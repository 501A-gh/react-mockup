# react-mockup

> Create simple mockups with a single react component

[![NPM](https://img.shields.io/npm/v/react-mockup.svg)](https://www.npmjs.com/package/react-mockup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About
react-mockup lets you create simple mockups with a single react component. This package contains three different components:
- `<WindowMockup/>`
- `<BrowserMockup/>`
- `<MobileMockup/>`

<!-- react-mockup also provides a web editor that allows you to customize your mockup visually without needing to fiddle around with the props. (The editor will generate the nessacary react-mockup component for you).

[Visit Editor]() -->

## Install

You can install react-mockup using NPM:
```bash
npm install --save react-mockup
```

## Example Usage
```jsx
import React from 'react'
import {BrowserMockup} from 'react-mockup'
import 'react-mockup/dist/index.css'

function App {
  return(
    <>
      <h1>React Mockup!</h1>
      <BrowserMockup
        src=""
        type="chrome"
        windowControlPosition="right"
        angleX="5deg"
        angleY="10deg"
        accentColor="orange"
        urlValue="google.com"
        shadow="none"
        border="none"
        color="black"
      />
    </>
  )
}
```

## Component Specific Properties
### 💻 Window Mockup
| Properties | What to insert |
| -------- | ---- |
| src | The image of what you want to display in the mockup |
| type | Button aesthetics (Currently accepts 4 types 'default', 'mac', 'chrome' and 'outline') |
| angleX | X angle of the mockup |
| angleY | Y angle of the mockup |
| shadow | Mockups `box-shadow` property. (Set as 'none' if you do not want to set anything) |
| border | Mockups `border` property. (Set as 'none' if you do not want to set anything) |
| color | The browser mockups head color |
| accentColor | The color of the buttons (when selected 'chrome' as types) |
| windowName | The display name of the window mockup |
| windowControlPosition | 'right' or 'left' |


### 🖱️ Browser Mockup
| Properties | What to insert |
| -------- | ---- |
| src | The image of what you want to display in the mockup |
| type | Button aesthetics (Currently accepts 4 types 'default', 'mac', 'chrome' and 'outline') |
| angleX | X angle of the mockup |
| angleY | Y angle of the mockup |
| shadow | Mockups `box-shadow` property. (Set as 'none' if you do not want to set anything) |
| border | Mockups `border` property. (Set as 'none' if you do not want to set anything) |
| color | The browser mockups head color |
| accentColor | The color of the buttons (when selected 'chrome' as types) and the color of the search bar |
| urlValue | The displayed URL value stored in the browser mockup  |
| windowControlPosition | 'right' or 'left' |

### 📱 Mobile Mockup [Beta]
| Properties | What to insert |
| -------- | ---- |
| src | The image of what you want to display in the mockup |
| size | The size of the phone mockup (default is '1') |
| angleX | X angle of the mockup |
| angleY | Y angle of the mockup |
| shadow | Mockups `box-shadow` property. (Set as 'none' if you do not want to set anything) |
| border | Mockups `border` property. (Set as 'none' if you do not want to set anything) |

## License

MIT © [](https://github.com/)
