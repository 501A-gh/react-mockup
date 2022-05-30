import React from 'react'
import styles from './styles.module.css'
import { MdRefresh, MdOutlineMoreVert } from "react-icons/md";
import WindowControl from './lib/WindowControl';

const MobileMockup = ({ src, size, angleX, angleY, border, shadow }) => {
  return (
    <div
      className={styles.iphone1}
      style={{
        boxShadow: `${shadow ? shadow : '0px 5px 15px var(--grey2)'}`,
        border: `${border ? border : '1px solid rgb(172, 172, 172)'}`,
        transform: `
          perspective(200px) 
          rotateX(${angleX}) 
          rotateY(${angleY})
        `
      }}>
      <div className={styles.speakerGrill}></div>
      <img width={230 * size} height={350 * size} src={src} />
      <div className={styles.homeButton}></div>
    </div>
  )
};

const WindowMockup = ({src, color, type, angleX, angleY, border, shadow, accentColor, windowName, windowControlPosition }) => {
  return (
    <div
      style={
        Object.assign(
          {
            transform: `
              perspective(200px) 
              rotateX(${angleX}) 
              rotateY(${angleY})
            `,
          }
        )
      }
    >
    <div
      className={`
        ${styles.window}
        ${styles[type]}
      `}
      style={{
        boxShadow: `${shadow ? shadow : '0px 5px 15px var(--grey2)'}`,
        border: `${border ? border : `1px solid ${accentColor}`}`,
        // transform: `
        //   perspective(200px) 
        //   rotateX(${angleX}) 
        //   rotateY(${angleY})
        // `
      }}>
      <div className={styles.windowHeader} style={{ backgroundColor: `${color}`, borderBottom: `1px solid ${accentColor}` }}>
        {windowControlPosition === 'left' ?
          <WindowControl
            type={type}
            wrapperClassName={styles.windowControlButtons}
            color={color}
            accentColor={accentColor}
          /> :
          <br />
        }
        <p>{windowName}</p>
        {windowControlPosition === 'right' ?
          <WindowControl
            type={type}
            wrapperClassName={styles.windowControlButtons}
            color={color}
            accentColor={accentColor}
          /> :
          <br />
        }
      </div>
      <img src={src} />
    </div>
    </div>

  )
};

const BrowserMockup = ({ frameStyle, src, color, type, angleX, angleY, border, shadow, accentColor, urlValue, windowControlPosition }) => {
  return (
    <div
      style={
        Object.assign(
          frameStyle,
          {
            transform: `
              perspective(200px) 
              rotateX(${angleX}) 
              rotateY(${angleY})
            `
          }
        )
      }
    >
      <div
        className={`
          ${styles.browser}
          ${styles[type]}
        `}
        style={{
          boxShadow: `${shadow ? shadow : '0px 5px 15px var(--grey2)'}`,
          border: `${border ? border : `1px solid ${accentColor}`}`,
        }}>
        <div className={styles.browserHeader} style={{ backgroundColor: `${color}`, borderBottom: `1px solid ${accentColor}` }}>
          {windowControlPosition === "left" ?
            <WindowControl
              type={type}
              wrapperClassName={styles.windowControlButtons}
              color={color}
              accentColor={accentColor}
            /> :
            <br />
          }
          <div
            className={styles.browserSearchBar}
            style={{ backgroundColor: accentColor, color: color }}
          >
            <span style={{ color: color }}><MdRefresh /></span>
            {urlValue ? urlValue : "react-mockup"}
            <span style={{ color: color }}><MdOutlineMoreVert /></span>
          </div>
          {windowControlPosition === "right" ?
            <WindowControl
              type={type}
              wrapperClassName={styles.windowControlButtons}
              color={color}
              accentColor={accentColor}
            /> :
            <br />
          }
        </div>
        <img src={src} />
      </div>
    </div>
  )
};

export { MobileMockup, WindowMockup, BrowserMockup }