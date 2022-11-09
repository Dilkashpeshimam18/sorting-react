import React from 'react'

const DemoList = ({ title, num }) => {

    return (
        <div>
            <h1>{title}</h1>
            {num.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default DemoList