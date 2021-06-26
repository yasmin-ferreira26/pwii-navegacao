import React from 'react'

export default props => {
    return(
        <div>
            <button onClick={props.setInc} >+</button>
            <button onClick={props.setDev} >-</button>
        </div>
    )
}