var inputHandler = (function (){

  var theRegistrationFields = document.querySelector('.reg-cover');
  theRegistrationFields.classList.add('hidden');
  var addPlayer = document.querySelector('#add_player');
  var inputsToAdd = document.querySelector('.handle_player');
  var container = document.querySelector('.players');

  var NewGameButton = document.querySelector('.new-game');

  NewGameButton.addEventListener('click', function () {
    theRegistrationFields.classList.remove('hidden');
  });

  var submitButton = document.querySelector('.submit');

  inputsToAdd.querySelector('.delete_player').addEventListener('click', function () {
    container.removeChild(inputsToAdd);
  });

  var plusPlayer = function () {
    if (document.querySelectorAll('.handle_player').length < 10){
      var newInput = inputsToAdd.cloneNode(true);
      newInput.querySelector('input').value = '';
      newInput.querySelector('.delete_player').addEventListener('click', function () {
        container.removeChild(newInput);
      });
      container.appendChild(newInput);
    } else {
      alert('You have reached the max. players.')
    }
  }

  addPlayer.addEventListener('click', plusPlayer);

  // ADDING alcohol Types

  var addAlcohol = document.querySelector('#add_alcohol_type');
  var selectorToAdd = document.querySelector('.alcohol_inputs');
  var alcoholContainer = document.querySelector('.alcohol_stock');

  selectorToAdd.querySelector('.delete').addEventListener('click', function () {
    alcoholContainer.removeChild(selectorToAdd);
  });

  var plusAlcohol = function () {
    var newInputs = selectorToAdd.cloneNode(true);
    newInputs.querySelector('input').value = '';
    newInputs.querySelector('.delete').addEventListener('click', function () {
      alcoholContainer.removeChild(newInputs);
    });
    alcoholContainer.appendChild(newInputs);
  };



  addAlcohol.addEventListener('click', plusAlcohol);

var xhr = new XMLHttpRequest();
var url = 'https://alike-libra.gomix.me';
var requestStart = 0;
var postData = function () {
  xhr.open('POST', url + '/start');
  xhr.setRequestHeader('Content-Type','application/json');
  console.log(inputHandler.post);
  xhr.send(JSON.stringify(toPost));
  console.log(JSON.stringify(toPost));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      listRenderer(xhr.response.result);
      missionUpdater(xhr.response.tasls);
    };
  };
};

// reader of the player-inputs!!!!!!!!!!!!!!!!!!!!!
  var toPost = [];
  submitButton.addEventListener('click', function () {
    var playersList = document.querySelectorAll('.playerInput');
    var players = [];
    for (var i= 0; i < playersList.length; i++) {
      var actual = playersList[i].value;
      if (actual.length) {
        players.push(actual);
      };
    };
    theRegistrationFields.classList.add('hidden');
    var alcoholList = document.querySelectorAll('.alcohol_inputs');
    var currentAlcoholType = '';
    var currentAlcoholDegree = 0;
    var currentAlcoholCapacity = 0;
    var liquids = [];
    for (var i=0; i< alcoholList.length; i++) {
      var alcohol = {};
      currentAlcoholDegree = parseInt(alcoholList[i].querySelector('.alcohol_selector').value);
      currentAlcoholCapacity = parseInt(alcoholList[i].querySelector('.liter_num').value);
      if (currentAlcoholDegree === 4) {
        currentAlcoholType = 'Sör';
      } else if (currentAlcoholDegree === 7) {
        currentAlcoholType = 'Fröccs';
      } else if (currentAlcoholDegree === 9 ) {
        currentAlcoholType = 'Erős sör';
      }else if (currentAlcoholDegree === 13) {
        currentAlcoholType = 'Bor';
      }else if (currentAlcoholDegree === 13.1) {
        currentAlcoholType = 'Pezsgő';
      }else if (currentAlcoholDegree === 17) {
        currentAlcoholType = 'Likőr';
      }else if (currentAlcoholDegree === 21 ) { // DREDD JUDGE BUILDING
        currentAlcoholType = 'Fehér rum';
      }else if (currentAlcoholDegree === 35 ) {
        currentAlcoholType = 'Unicum';
      }else if (currentAlcoholDegree === 37.5 ) {
        currentAlcoholType = 'Whiskey';
      }else if (currentAlcoholDegree === 37.6 ) {
        currentAlcoholType = 'Fütyülős Műpálinka';
      }else if (currentAlcoholDegree === 38 ) {
        currentAlcoholType = 'Vodka';
      }else if (currentAlcoholDegree === 45 ) {
        currentAlcoholType = 'Tequila';
      }else if (currentAlcoholDegree === 47.3 ) {
        currentAlcoholType = 'Gin';
      }else if (currentAlcoholDegree === 60 ) {
        currentAlcoholType = 'Matróz rum';
      }else if (currentAlcoholDegree === 60.1 ) {
        currentAlcoholType = 'Gyengébb Pálinka';
      }else if (currentAlcoholDegree === 60.2 ) {
        currentAlcoholType = 'Abszint Light';
      }else if (currentAlcoholDegree === 80 ) {
        currentAlcoholType = 'Erős Pálinka';
      }else if (currentAlcoholDegree === 81 ) {
        currentAlcoholType = 'Spicc Rum';
      }else if (currentAlcoholDegree === 82 ) {
        currentAlcoholType = 'Abszint';
      } else if (currentAlcoholDegree === 0) {
        currentAlcoholType = '';
      }
      alcohol.name = currentAlcoholType;
      alcohol.degree = currentAlcoholDegree;
      alcohol.capacity = currentAlcoholCapacity;
      if (currentAlcoholType.length) {
        liquids.push(alcohol);
      }
    }
    toPost = {players,liquids};
    postData();
    return toPost;
    });

  return {
    addPlayer: plusPlayer,
    addAlcohol: plusAlcohol,
    post: toPost,
  };
}());
