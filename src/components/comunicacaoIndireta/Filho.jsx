import React from 'react'

export default (props) => {

    function actionBtn(){
        props.clickButton(Math.random(),"Gerou:")
    }

    return (
    <div>
        <h1>Filho</h1>
        <button onClick={actionBtn}>Alterar</button>
    </div>
    )
}