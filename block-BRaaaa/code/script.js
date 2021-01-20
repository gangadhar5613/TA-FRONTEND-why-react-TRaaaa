const form = document.querySelector('.form');
const movieWatchList = document.querySelector('.movie-watch-list');

const movieList = JSON.parse(localStorage.getItem('movieList')) || [];


//function to handle the input

function handleInput(event){
   event.preventDefault();
 
   movieList.push({
       name:form.elements.movie.value,
       isWatched: false
   });
   localStorage.setItem('movieList',JSON.stringify(movieList));
    createUI(movieList);
}



form.addEventListener('submit',handleInput);



//function to create UI

function createUI(movieList){
    movieWatchList.innerHTML = '';
    movieList.forEach((movie) => {
      
        const div = document.createElement('div');
        div.classList.add('list');
        const span = document.createElement('span');
        span.classList.add('movie-name');
        span.setAttribute('dataset-name',movie.name)
        span.innerText = movie.name;
        
        div.append(span);

        const button = document.createElement('button');
        button.classList.add('status-btn')
        button.innerText = movie.isWatched ? 'Watched' : 'To Watch';
        div.append(button);
        movieWatchList.append(div);
    })


  
}

createUI(movieList);


//function to handle button
function handleBtn(event){
    event.preventDefault();
   if(event.target.tagName === 'BUTTON'){
       const movieName = event.target.previousElementSibling.innerText
    //    movieList[movieName].isWatched = movieList[movieName].isWatched ? false : true ;
     movieList.find((object) => object.name == movieName).isWatched =  movieList.find((object) => object.name == movieName).isWatched ? false : true ;
      localStorage.setItem('movieList',JSON.stringify(movieList));
       createUI(movieList);

    
   }

}


movieWatchList.addEventListener('click',handleBtn)


