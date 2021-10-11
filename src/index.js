import React from 'react'
import styles from './styles.module.css'

const MobileMockup = ({ src, size }) => {
  return (
    <div
      className={styles.iphone1}>
      <div className={styles.speakerGrill}></div>
      <img width={230 * size} height={350 * size} src={src} />
      <div className={styles.homeButton}></div>
    </div>
  )
};
const BrowserMockup = ({ src }) => {
  return (
    <div
      className={styles.browser}>
      <div className={styles.browserHeader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={src} />
    </div>
  )
};

export { MobileMockup, BrowserMockup }