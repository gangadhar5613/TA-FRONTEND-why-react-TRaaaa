

import data from '../users.json';

function Cards(){
    return (
       <section className='grid grid-cols-4 '>
           {
               data.map((user) => {
                  return <Card key={user._id}  {...user} />
               })
           }
       </section>
    )
}


function maleOrFemale(gender){
   if(gender === 'male'){
       return `👨`
   }else{
       return `👩`
   }

   
}

function favoriteFruit(fruit){
 if(fruit === 'strawberry'){
     return `🍓`
 }else if(fruit === 'apple'){
     return `🍎`
 }else if(fruit === 'banana'){
     return `🍌`
 }
}

function Card(props){
    return (
                     <section className={props.isActive === true ? "flex flex-row card isActive mx-2 my-4 py-4 px-4" : "flex flex-row card mx-2 my-4 py-4 px-4 notActive"}>
                        <div className='image-section flex flex-col mx-2'>
                            <img className='w-1/2' src={props.picture} alt='user'></img>
                            <span>{maleOrFemale(props.gender)}</span>
                            <h2>{props.age}</h2>
                            <h3>{props.eyeColor}</h3>
                            <h3>{props.company}</h3>
                        </div>
                        <div className='flex flex-col text-center border-2 border-l-black p-2 m-2'>
                            <h1>{props.name}</h1>
                            <h2>{props.phone}</h2>
                            <h3>{props.email}</h3>
                            <h4>{favoriteFruit(props.favoriteFruit)}</h4>
                        </div>
                     </section>
    )
    
}


export default Cards;