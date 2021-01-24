
let data =[
    {
        type:'primary',
        label:'Button',
        size:'medium',
        
    },
    {
        type:'secondary',
        label:'Button',
        size:'small'
    },
    {
        type:'teritory',
        label:'Button',
        size:'large'
    }

]

function Buttons(){
      return (
          <section className='flex flex-col text-center items-center'>
               {
                   data.map((type) => {
                      return  <Button key={type.size} {...type} />
                   })
               }
          </section>
      )
}

function buttonType(type){
    if(type === 'small'){
        return 'text-1xl text-red-700'
    }else if(type === 'medium'){
        return 'text-3xl text-green-800'
    }else if(type === 'large'){
        return 'text-4xl'
    }
}

function Button(props){
     return (
         <h2 className={`${ buttonType( props.size)} inline p-2 my-2 bg-black text-white`} >Button</h2>
     )
}


export default Buttons;