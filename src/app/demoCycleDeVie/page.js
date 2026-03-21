"use client"

import { useEffect, useState } from 'react';

function ExempleCycleDeVie() {
  const [count, setCount] = useState(0);

  // Similaire à componentDidMount et componentDidUpdate
  useEffect(() => {
    console.log('Le composant a été monté ou mis à jour');
    
    // Similaire à componentWillUnmount
    return () => {
      console.log('Le composant va être démonté');
    };}
);

  // Similaire à componentDidMount uniquement
  useEffect(() => {
    console.log('Le composant a été monté');
  }, []);

  // S'exécute uniquement lorsque count change
  useEffect(() => {
    console.log(`La valeur de count a changé : ${count}`);
  }, [count]);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)} className='p-3 bg-blue-50 border-2 rounded-3xl'>
        Cliquez ici
      </button>
    </div>
  );
}

function Exemple() {
  const [data, setData] = useState({ valeur: 0 });

  useEffect(() => {
    console.log(`L'effet s'exécute. Valeur ${data.valeur}`);
  }, [data]); // Dépendance incluse

  // ...
  return (
    <div>
        <p>Valeur : {data.valeur}</p>
        <button onClick={() => setData({ valeur: data.valeur + 1 })} className='p-3 bg-green-50 border-2 rounded-3xl'>
            Incrémenter la valeur
        </button>

    </div>
  )
}


function Horloge() {
  const [heure, setHeure] = useState(new Date());

  function mettreAJourHeure() {
    setHeure(new Date());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      mettreAJourHeure();
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Dépendances manquantes ?

  return <div>Il est {heure.toLocaleTimeString()}</div>;
}





export default Horloge;