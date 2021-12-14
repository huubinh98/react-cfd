import React from 'react'

export default function Tags({ tag }) {

    return (
        <>
            {tag.map((item) => <div className='tag-item' key={item}>{item}</div>)}
        </>
    )
}
