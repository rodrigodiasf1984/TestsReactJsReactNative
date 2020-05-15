import React, {useState, useEffect} from 'react';

// import { Container } from './styles';

function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(()=>{
    const techs = localStorage.getItem('techs');
    if(techs){
      setTechs(JSON.parse(techs));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  function handleTech(){
    setTechs([...techs, newTech]);
    setNewTech('');
    
  }


  return( 
  <form data-testid="tech-form" onSubmit={handleTech}>
    <ul data-testid="tech-list">
     {techs.map(tech => 
        <li key={tech}>{tech}</li>)
      }
    </ul>
    <label htmlFor="tech">Tech</label>
    <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)}/>
    <button onClick={handleTech}>Adicionar</button>
  </form>
  );
}

export default TechList;