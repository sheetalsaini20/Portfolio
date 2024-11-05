import React from 'react'

export default function CommonHeading(props) {
    return (
        <div className={`sub-heading ${props?.className}`} data-aos={props?.dataAos} data-animation={props?.dataAnimation}>
            {props?.icon}
            <span className='ms-3'>{props?.heading}</span>
        </div>
    )
}
