import React from 'react'

export default function Box({ imgSrc }) {

    const style = {
        boxShadow: "6px 10px 19px 0px rgba(0,0,0,0.75)",
        margin: "20px"
    }

    return (
        <span><img style={style} width="200" src={imgSrc} /></span>
    )
}
