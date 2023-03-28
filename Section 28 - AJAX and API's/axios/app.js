const mainSection = document.querySelector('section');
const jokeBtn = document.querySelector('button');
const jokeDisplay = document.querySelector('#jokeDisplay');

mainSection.style.display = 'flex';
mainSection.style.flexDirection = 'column';
mainSection.style.alignItems = 'center';

jokeDisplay.style.textAlign = 'center';
jokeDisplay.style.listStyleType = 'none';
const getStarWarsPerson = async () => {
    try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        });
        
        return response.data.joke;
    } catch (error) {
        console.log("No jokes available! Sorry...", error)
    }

};

jokeBtn.addEventListener('click', async () => {
    const joke = await getStarWarsPerson();
    const newLi = document.createElement('li');
    newLi.style.fontSize = '22px';
    newLi.textContent = joke;
    jokeDisplay.append(newLi);
});