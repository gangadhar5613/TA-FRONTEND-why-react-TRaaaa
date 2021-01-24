import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';

function handleClick(country){
   return  alert( ` Country Name:${country.name}, country Code: ${country.unicode} + ${country.emoji}`)
}

function App(){
      return <>
          <h1 className='text-center text-2xl font-bold my-5'>All countries</h1>
           <section className='grid grid-cols-8'>
           {
              data.map((country) => {
                 
                   return    <div onClick={() => handleClick(country)} className='bg-black text-white mx-2 my-2 py-2  text-center cursor-pointer'>{country.name}</div>
                  
              })
          }
           </section>
      </>
}


ReactDOM.render(<App />,document.getElementById('root'));