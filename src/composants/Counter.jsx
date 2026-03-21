'use client';

import { useState } from 'react';

const styles = {
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
    },
}

export default function Counter() {
 let [count, setCount] = useState(0);

   const [items, setItems] = useState(['Lait', 'Pain']);


 function increment() {
    setCount(prev => prev + 1);
    setItems([...items, "Bananes"]);  //destructing 
    
    console.log("counter " + count); 
 }


 return (<>
    <h1>Counter: {count}</h1>
    <button className='border-2 border-black p-3 bg-amber-100 rounded-2xl'
        onClick={increment}>
        plus 1
    </button>
    {count > 10 &&  <p>Le compteur est supérieur à 10!</p>}

        <p>{items.join(", ")}</p>

 </>)

}