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

const WindowMockup = ({ src, color, type, angleX, angleY, border, shadow, accentColor, windowName, windowControlPosition }) => {
  return (
    <div
      className={`
        ${styles.window}
        ${styles[type]}
      `}
      style={{
        boxShadow: `${shadow ? shadow : '0px 5px 15px var(--grey2)'}`,
        border: `${border ? border : `1px solid ${accentColor}`}`,
        transform: `
          perspective(200px) 
          rotateX(${angleX}) 
          rotateY(${angleY})
        `
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
  )
};

const BrowserMockup = ({ frameData, src, color, type, angleX, angleY, border, shadow, accentColor, urlValue, windowControlPosition }) => {
  return (
    <div
      style={{
        backdropFilter: `${frameData ? frameData.backdropFilter : 'blur(16px)'}`,
        background:`${frameData ? frameData.background : 'radial-gradient(86.36% 107.55% at 6.49% 12.32%,rgba(255, 255, 255, 0.5) 0%,rgba(255, 255, 255, 0.5) 100%)'}`,
        border:`${frameData ? frameData.border : '1px solid rgba(228, 228, 228, 0.3)'}`,
        padding:`${frameData ? frameData.size : '10px'}`,
        borderRadius:`${frameData ? frameData.borderRadius : '20px'}`,
        transform: `
          perspective(200px) 
          rotateX(${angleX}) 
          rotateY(${angleY})
        `
      }}
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