import React from 'react'

export default props => {
    return (
        <h2>
            <label htmlFor="passoInput">Passo: </label>
            <input
                id="passoinput"
                type="number"
                value={props.passo}
                onChange={event => props.setPasso(+event.target.value)}
            />    
        </h2>
    )
}