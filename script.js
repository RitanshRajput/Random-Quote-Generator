let quote = document.getElementById("quote") ;
let author = document.getElementById("author") ;
let btn = document.getElementById("btn") ;

const url = "https://api.quotable.io/random" ;       //🔸 THe api link of random qoute.

let getQuote = () =>{
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        console.log(item.content) ;
        console.log(item.author) ;
        quote.innerText = item.content ;
        author.innerText = item.author ;
    }) ;
} ;

btn.addEventListener("click", getQuote) ;

window.addEventListener("load", getQuote) ;      //🔸 To check on console if the fetch data is receiving or not