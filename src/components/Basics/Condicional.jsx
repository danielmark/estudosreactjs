import React from 'react'


export default props => {
    return (
        <div>
            <h2>Número <strong>{props.numero}</strong> é</h2>
            {
                props.numero % 2 === 0 ? 
                <span>Par</span>:<span>Impar</span>
            }
        </div>
    )
}