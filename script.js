// api key is IMDB website =  107a65a67585b99352175ae1f30bc61a

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=107a65a67585b99352175ae1f30bc61a&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=107a65a67585b99352175ae1f30bc61a&query=";



const main =  document.getElementById("section");
const form  = document.getElementById("form");
// tp get the value of search item from the user 
const search = document.getElementById("query");


returnmovies(APILINK);

function returnmovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data){
        console.log(data.results);

        data.results.forEach(element =>{
            const div_card = document.createElement('div');
            // we must set its attribute
            div_card.setAttribute('class','card');
            
            const div_row = document.createElement('div');
            div_row.setAttribute('class','row');
            
            const div_column = document.createElement('div');
            div_column.setAttribute('class','coloumn');
            
            const image = document.createElement('img');
            image.setAttribute('class','thumbnail');    
            image.setAttribute('id','image');

            const title = document.createElement('h3');
            title.setAttribute('id','title');
            title.setAttribute('class','title');

            const rating = document.createElement('h4');
            rating.setAttribute('id','rating');



            const centre = document.createElement('centre');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
            rating.innerHTML = `IMDB : ${element.vote_average}`;

            centre.appendChild(image);
            div_card.appendChild(centre);
            div_card.appendChild(title);
            div_card.appendChild(rating);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);

        });
    });
}
 

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    // this allow us to remove 
    // above previous movies then add new movies 
    // as we aree setting inner html of main to blank 
    main.innerHTML = '';

    const searchItem = search.value;

    if(searchItem){
        returnmovies(SEARCHAPI+searchItem);
            search.value = "";
    }

});