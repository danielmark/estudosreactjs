import React, {useState} from "react"

export default (props) => {
    const [name, setName] = useState('Daniel')
    return (
        <div>
            <h3>Entrada: {name}</h3>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
        </div>
    )
}