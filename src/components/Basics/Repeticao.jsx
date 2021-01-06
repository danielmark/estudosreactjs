import React from 'react'
import dataProd from '../../data/products'

export default props => {

    function getProdListItem() {
        return dataProd.map(prod => {
            return <li key={prod.id}>{prod.id}-{prod.desc} / Preço: $ {prod.price}</li>
        })
    }

    return (
        <div>
            <ul>
                {getProdListItem()}
            </ul>
        </div>
    )
}