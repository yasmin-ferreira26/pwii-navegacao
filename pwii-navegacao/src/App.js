import './App.css'

import React from 'react'

import ContadorCompleto from './components/ContadorCompleto';
import Card from './components/layout/Card';

export default() =>(
  <div className="App">
    <h1>Contador</h1>
  
   <div className="Cards">
      <Card titulo= "contador em um componente único" color="#02044f">
        <ContadorCompleto numeroInicial={10}/>
     </Card>
    </div>
  </div>
)
 