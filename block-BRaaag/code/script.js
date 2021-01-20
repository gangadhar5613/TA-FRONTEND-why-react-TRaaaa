// const form = document.querySelector('.form');
// const movieWatchList = document.querySelector('.movie-watch-list');

// const movieList = JSON.parse(localStorage.getItem('movieList')) || [];




// const element = React.createElement;

// //function to createUI

// function createUI(movieList){
//    let allMovieList =    movieList.map(movie => {
//         const div = element('div',{
//             className:'list'
//         },
//         element('span',{className:'movie-name'},movie.name),
//         element('button',{className:'status-btn'} , movie.isWatched ? 'Watched' : 'To Watch')
//         )

      
//         return div;
//     }) ;

//     ReactDOM.render(allMovieList,movieWatchList);
    
// }

// createUI(movieList);

// //function to handle input

// function handleInput(event){
//   event.preventDefault();
//   movieList.push({
//       name:event.target.elements.movie.value,
//       isWatched:false
//   });
//   localStorage.setItem('movieList',JSON.stringify(movieList));
//   console.log(movieList);
//   createUI(movieList);
// }


// //function to handle btn

// function handleBtn(event){
//    event.preventDefault();
//    if(event.target.tagName === 'BUTTON'){
//        const movie = event.target.previousElementSibling.innerText
//         movieList.find((object) => object.name == movie).isWatched =  movieList.find((object) => object.name == movie).isWatched ? false : true ;
//        localStorage.setItem('movieList',JSON.stringify(movieList));
//        createUI(movieList);

//    }
// }

// form.addEventListener('submit',handleInput);
// movieWatchList.addEventListener('click',handleBtn);