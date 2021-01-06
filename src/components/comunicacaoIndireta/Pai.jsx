import React, { useState } from 'react'
import Filho from './Filho'

export default (props) => {

    const [num, setNum] = useState(0)
    const [label, setLabel] = useState("Valor:")

    function clickButtonx(val,texto) {
        setNum(val)
        setLabel(texto)
    }

    return (
        <div>
            <h2>Pai</h2>
            <p>{label}:{num}</p>
            <Filho clickButton={clickButtonx}></Filho>
        </div>
    )
}