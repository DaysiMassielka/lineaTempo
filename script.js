






'use strict';
let url =
  'https://gist.githubusercontent.com/bertez/8e62741154903c35edb3bfb825a7f052/raw/b5cd5137fd168116cc71740f1fbb75819d0fa82e/zelda-timeline.json';

const main = document.querySelector('main');

async function json() {
  fetch(url)
    .then((response) => response.json())

    .then((fechas) => {
      //ordenar fechas por fecha
      fechas.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      fechas.forEach((fecha) => {
        const section = document.createElement('section');
        section.innerHTML += `<h2>${fecha.date}</h2>        
          <h3>${fecha.title}</h3>
          <img src="${fecha.image}"></img>          
          <p>${fecha.text}</p>
          `;
        main.append(section);
      });
    });
}
json();
