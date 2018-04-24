import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Trainer } from './user.js'
// import { ListId } from './listid.js';
// import { pokedex2 } from './Pokedex.js';

$(document).ready(function() {

  $('#setPoke').submit(function(event) {
    event.preventDefault();
    let pokemon = $('input:radio[name="poke"]:checked').val();
    // console.log(pokemon);
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
      request.onload = function() {
        this.status === 200 ? resolve(request.response) : reject(Error(request.statusText));
      };
      request.open('GET', url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      let name = $('#trainerName').val();
      let starter = `${pokemon}`
      let trainer = new Trainer(name, starter);
      console.log(trainer.name);
      $('.poke1').text(`${name} chose ${body.forms[0].name}`);
      // console.log(`${body.moves[0].name}`);
    }, function(error) {
      $('.showErrors').text(`there was an error: ${error.message}`);
    });
  })
});



// ${body.moves[0].move.name}
