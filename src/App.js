import { useEffect, useState } from 'react';
import './App.css';



function App() {

    // Inicialize os estados com a hora atual
    const [horas, setHoras] = useState(new Date().getHours());
    const [minutos, setMinutos] = useState(new Date().getMinutes());
    const [segundos, setSegundos] = useState(new Date().getSeconds());

    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaSemana = diasSemana[new Date().getDay()];

    const dia= (new Date().getDate());
    const mes= (new Date().getMonth()+1);
    const ano= (new Date().getFullYear());

  useEffect(()=>{
    const interval = setInterval(()=>{
        setSegundos(segundos+1);
      if(segundos === 59){
        setSegundos(0);
        setMinutos(minutos+1);
    }
      if(minutos === 59){
        setMinutos(0);
        setHoras(horas+1);
      }
      if(horas === 24){
        setHoras(0);
      }
    },1000);
    return()=> clearInterval(interval);
},)

  return (
    <div className='geral'>
      <div className='imagem'>
          <img src='/img/lua.png' alt=''/>
      </div>
      <div className='clock-outline'>
          
        <div className="App">
              
              <h1>{horas}:{minutos}:{segundos}</h1>
        </div>
      </div>
      <div className='data'>
          <p>{diaSemana}<br></br>{dia}/{mes}/{ano}</p>
      </div>
      
    </div>
  );
}

export default App;
