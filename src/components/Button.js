import React from 'react'

const Button = ({ text, changeTitle }) => {
    return (
        <div>
            <button onClick={changeTitle}>{text}</button>
        </div>
    )
}

export default React.memo(Button)