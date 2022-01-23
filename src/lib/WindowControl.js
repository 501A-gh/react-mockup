import React from 'react'
import { MdClose, MdMinimize, MdCropSquare } from "react-icons/md";


export default function WindowControl(props) {
    let type = props.type;
    let color = props.color;
    let accentColor = props.accentColor;

    return (
        <div className={props.wrapperClassName} style={{ display: 'flex', alignItems: 'center' }}>
            {type === 'default' && <div style={{ backgroundColor: accentColor }}></div>}
            {type === 'default' && <div style={{ backgroundColor: accentColor }}></div>}
            {type === 'default' && <div style={{ backgroundColor: accentColor }}></div>}

            {type === 'chrome' && <span style={{ color: accentColor }}><MdMinimize /></span>}
            {type === 'chrome' && <span style={{ color: accentColor }}><MdCropSquare /></span>}
            {type === 'chrome' && <span style={{ color: accentColor }}><MdClose /></span>}

            {type === 'mac' && <div></div>}
            {type === 'mac' && <div></div>}
            {type === 'mac' && <div></div>}

            {type === 'outline' && <div style={{ border: `1px solid ${accentColor}` }}></div>}
            {type === 'outline' && <div style={{ border: `1px solid ${accentColor}` }}></div>}
            {type === 'outline' && <div style={{ border: `1px solid ${accentColor}` }}></div>}
        </div>
    )
}
