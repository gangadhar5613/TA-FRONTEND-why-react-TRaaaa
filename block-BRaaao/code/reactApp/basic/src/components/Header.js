function Header(){
    return (
        <>
        <div className='flex px-10 py-2 bg-yellow-500  justify-between'>
           <h1 className='text-2xl font-bold text--600'>NGReddy</h1>
           <nav>
               <ul className= 'flex flex-row'>
                  <li className='mx-1'>Home</li>
                  <li className='mx-1'>About</li>
                  <li className='mx-1'>Contact</li>
               </ul>
           </nav>
        </div>
        </>
    )
}

export default Header;