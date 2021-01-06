import React from 'react'

export default props => {
    function parImpar (){
        if(props.numero % 2 === 0){
            return <span>Par</span>
        }else{
            return <span>Impar</span>
        }
    }
    return (
        <div>
            <h2>Número <strong>{props.numero}</strong> é</h2>
            {parImpar()}
        </div>
    )
}