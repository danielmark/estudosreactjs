import React from 'react'
import Filho from './Filho'


export default props =>
<div>
    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Pedro</Filho>
    <Filho sobrenome="Silva">Paulo</Filho>
</div>