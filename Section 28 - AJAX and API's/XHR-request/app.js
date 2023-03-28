const url = 'https://swapi.dev/api/people/1/';

const request = new XMLHttpRequest();

request.onload = function () {
    console.log("IT LOADED!!!");
    const parsedResponse = JSON.parse(this.responseText);
    console.log(parsedResponse.name);
}

request.onerror = function () {
    console.log("ERROR!!!!");
    console.log(this);
}

request.open("GET", url);
request.send();