
const favouriteFilm = {
    title : "Minnal Murali" ,
    year : "2021" ,
    genere : "action" ,
    star : "Tovino Thomas" ,
    director : "Basil Joseph"
  }
 
  const {title : film, year , genere, star: hero , director, heroine="Asha"} = favouriteFilm
  
  console.log(`My favourite film is ${film} starring ${hero}.It's an ${genere} film that was directed by ${director} and released in ${year}.Heroine is ${heroine}.`)


const dreamJob = {
    company : "Google" ,
    location : "USA" ,
    designation : "Software Engineer" ,
    
  }

  const {company, location : JobLocation, designation } = dreamJob
 
 console.log(`I would love to be a ${designation} , at ${company} in ${JobLocation}.`)