const simpsonsQuoteAPI = 'https://thesimpsonsquoteapi.glitch.me/quotes';


const quoteGenerator = () => {
    axios.get(simpsonsQuoteAPI)
        .then((response) => {
            let data = response.data[0];

            const quoteDisplay = (event) => {
                const quotesAPI = document.querySelector('.tv__text');
                quotesAPI.innerText = data.quote;
                quotesAPI.style.display = 'block';
                
                const characterAPI = document.querySelector('.tv__characters');
                characterAPI.src = data.image;
                characterAPI.style.display = 'none';
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
    const characterClass = document.querySelector('.tv__characters');
    characterClass.style.display = 'block';
    const quotesAPI = document.querySelector('.tv__text');
    quotesAPI.style.display = 'none';
}

const quotesButton = document.querySelector('.tv__quote-button');
quotesButton.addEventListener('click', quoteGenerator);

const charactersButton = document.querySelector('.tv__characters-button');
charactersButton.addEventListener( 'click', showCharacter );