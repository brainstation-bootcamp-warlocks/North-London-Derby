const simpsonsQuoteAPI = 'https://thesimpsonsquoteapi.glitch.me/quotes';
const quoteGenerator = ()=>{
    axios.get(simpsonsQuoteAPI)
        .then((response)=>{
            let data = response.data[0];
            const quoteDisplay = (event) => {
                const quotesAPI = document.querySelector( '.quotes__text' );
                quotesAPI.innerText = data.quote;
                const characterAPI = document.querySelector( '.characters__image');
                characterAPI.src = data.image;
                characterAPI.style.display = 'none';
                event.preventDefault();
            }
            console.log(data);
            return quoteDisplay();
        })
        .catch((e) =>{
            console.log(e);
        })
}
const showCharacter = (event) => {
    event.preventDefault();
    const characterClass = document.querySelector( '.characters__image');
    characterClass.style.display = 'block';
}
// const characterGenerator = ()=>{
//     axios.get(simpsonsQuoteAPI)
//     .then((response)=>{
//         let data = response.data[0];
//         if (quoteGenerator() === data.name){
//             const imageAPI = document.querySelector( '.characters__image' );
//             imageAPI.src = data.image;
//         }
//         //console.log(data);
//     })
//     .catch((e) =>{
//         console.log(e);
//     })
// }
// const quoteDisplay = (event) => {
//     quoteGenerator();
// }
// const characterDisplay = (event)=> {
//     characterGenerator();
// }
//const returnValues = quoteGenerator();
const quotesButton = document.querySelector('.quotes__button');
quotesButton.addEventListener('click', quoteGenerator);
const charactersButton = document.querySelector( '.characters__button' );
charactersButton.addEventListener( 'click', showCharacter );