
import propTypes from 'prop-types';

import data from '../data';

function Articles(){
   return (
       <>
            <h2 className='text-center my-5 font-bold text-3xl'>My Articles</h2>
            <section className='flex flex-row flex-wrap justify-around my-5'>
                
                {
                    data.map((article) => {

                        return <Article {...article} />

                    })
                }
            </section>
       </>
   )
   
}

function Article(props){
   return (
      <section className='article-card mx-5 my-5 text-center'>
            <div className='img-sec'>
                  <img className='w-full' src={props.imageURL} alt='nature' ></img>
            </div>
            <div>
                <h2 className='text-2xl'>{props.title}</h2>
            </div>
      </section>
   )
}




Article.propTypes ={
   imageURL :propTypes.string,
   title : propTypes.string
}


export default Articles;