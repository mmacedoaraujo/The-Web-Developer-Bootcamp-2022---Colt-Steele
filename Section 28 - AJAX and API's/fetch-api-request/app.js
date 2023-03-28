const url = 'https://swapi.dev/api/people/';

/* fetch(url)
    .then(response => {
        console.log("Resolved", response)
        return response.json()
    })
    .then(parsedResponse => {
        console.log(parsedResponse)
        return fetch('https://swapi.dev/api/people/2/')
    })
    .then(secondRequest => {
        return secondRequest.json();
    })
    .then(secondRequest => {
        console.log(secondRequest);
    })
    .catch(error => {
        console.log("Error", error)
    }); */

const loadRandomStarWarsPeople = async () => {
    for (let i = 0; i <= 10; i++) {
        let variant = Math.round(Math.random() * 100);
        try {
            const response = await fetch(`${url}${variant}/`);
            const data = await response.json();
            console.log(`Name = ${data.name}, Height = ${data.height}`);
        } catch (error) {
            console.log("Error!", error)
        }

    }

}