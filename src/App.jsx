import './App.css';
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/Basics/Primeiro'
import ComParametro from './components/Basics/ComParametro'
import ComFilhos from './components/Basics/ComFilhos'
import Repeticao from './components/Basics/Repeticao'
import Condicional from './components/Basics/Condicional'
import CondicionalIF from './components/Basics/CondicionalIF'

import ComDiretaPai from './components/comunicacaoDireta/Pai'
import ComInDiretaPai from './components/comunicacaoIndireta/Pai'

import Input from  './components/form/input'

export default (props) => (
    <div className="App">

        <Card titulo="#8- Controlando entradas" color="#78C0A8">
            <Input></Input>
        </Card>

        <Card titulo="#7- Exercicio Comunicao Indireta" color="#F07818">
            <ComInDiretaPai></ComInDiretaPai>
        </Card>

        <Card titulo="#7- Exercicio Comunicao Direta" color="#F07818">
            <ComDiretaPai sobrenome="Braga"></ComDiretaPai>
        </Card>

        <Card titulo="#6- Exercicio Condicional IF" color="#5E412F">
            <CondicionalIF numero={Math.floor(Math.random() * (100 - 1) + 1)}></CondicionalIF>
        </Card>
        
        <Card titulo="#5- Exercicio Condicional" color="#FCEBB6">
            <Condicional numero={Math.floor(Math.random() * (100 - 1) + 1)}></Condicional>
        </Card>

        <Card titulo="#4- Exercicio Com Repetição" color="#78C0A8">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#3- Exercicio Com Filhos" color="#F07818">
            <ComFilhos>
                <ul>
                    <li>Daniel</li>
                    <li>Braga</li>
                    <li>Marcelino</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#2- Exercicio passando parametro" color="#F0A830">
            <ComParametro titulo="Passando o parametro" subtitulo="passando o segundo parametro" />
        </Card>

        <Card titulo="#1- Primeiro exercicio" color="#FCEBB6">
            <Primeiro />
        </Card>

        <Card titulo="#0- Hello World" color="#5E412F">
            <h1>Olá Mundo!</h1>
        </Card>

    </div>
)