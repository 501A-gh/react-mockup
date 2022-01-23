import React from 'react'
import styles from './styles.module.css'
import { MdClose, MdMinimize, MdCropSquare, MdRefresh, MdOutlineMoreVert } from "react-icons/md";

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

const WindowMockup = ({ src, color, type, angleX, angleY, border, shadow, accentColor }) => {
  return (
    <div
      className={`
        ${styles.window}
        ${styles[type]}
      `}
      style={{
        boxShadow: `${shadow ? shadow : '0px 5px 15px var(--grey2)'}`,
        border: `${border ? border : '1px solid rgb(172, 172, 172)'}`,
        transform: `
          perspective(200px) 
          rotateX(${angleX}) 
          rotateY(${angleY})
        `
      }}>
      <div className={styles.windowHeader} style={{ backgroundColor: `${color}` }}>
        {type === 'chrome' ? <span style={{ color: accentColor }}><MdMinimize /></span> : <div></div>}
        {type === 'chrome' ? <span style={{ color: accentColor }}><MdCropSquare /></span> : <div></div>}
        {type === 'chrome' ? <span style={{ color: accentColor }}><MdClose /></span> : <div></div>}
      </div>
      <img src={src} />
    </div>
  )
};

const BrowserMockup = ({ src, color, type, angleX, angleY, border, shadow, accentColor, urlValue }) => {
  return (
    <div
      className={`
        ${styles.browser}
        ${styles[type]}
      `}
      style={{
        boxShadow: `${shadow ? shadow : '0px 5px 15px var(--grey2)'}`,
        border: `${border ? border : '1px solid rgb(172, 172, 172)'}`,
        transform: `
          perspective(200px) 
          rotateX(${angleX}) 
          rotateY(${angleY})
        `
      }}>
      <div className={styles.browserHeader} style={{ backgroundColor: `${color}` }}>
        <div className={styles.browserButtons}>
          {type === 'chrome' ? <span style={{ color: accentColor }}><MdMinimize /></span> : <div></div>}
          {type === 'chrome' ? <span style={{ color: accentColor }}><MdCropSquare /></span> : <div></div>}
          {type === 'chrome' ? <span style={{ color: accentColor }}><MdClose /></span> : <div></div>}
        </div>
        <div className={styles.browserSearchBar} style={{ backgroundColor: accentColor }}>
          <span style={{ color: color }}><MdRefresh /></span>
          {urlValue ? urlValue : "react-mockup"}
          <span style={{ color: color }}><MdOutlineMoreVert /></span>
        </div>
        <div></div>
      </div>
      <img src={src} />
    </div>
  )
};

export { MobileMockup, WindowMockup, BrowserMockup }