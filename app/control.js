var manipulateInputs = (function (){

  var theRegistrationFields = document.querySelector('.registration');
  // theRegistrationFields.classList.add('hidden');
  var addPlayer = document.querySelector('#add_player');
  var inputsToAdd = document.querySelector('.handle_player');
  var container = document.querySelector('.players');

  var NewGameButton = document.querySelector('.new-game');

  NewGameButton.addEventListener('click', function () {
    theRegistrationFields.classList.remove('hidden');
  });

  var submitButton = document.querySelector('.submit');

  // submitButton.addEventListener('click', function () {
  //   theRegistrationFields.classList.add('hidden');
  // });

  inputsToAdd.querySelector('.delete_player').addEventListener('click', function () {
    container.removeChild(inputsToAdd);
  });

  var plusPlayer = function () {
    console.log(addPlayer);
    if (document.querySelectorAll('.handle_player').length <= 10){
      var newInput = inputsToAdd.cloneNode(true);
      newInput.value = '';
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


var alcoholList = function () {
  var result = [];
  result.push(document.querySelectorAll(''))
}
// delete unnecceserry lines with button


  return {
    addPlayer: plusPlayer,
    addAlcohol: plusAlcohol,
  };
}());

// var dummyRequests = (function () {
//
//   var initPost = {
// 	"players": ["szur", "ct"],
// 	"liquids": [{
// 		"name": "kertsszaggat",
// 		"degree": 50,
// 		"capacity": 1
// 	}, {
// 		"name": "lanypia",
// 		"degree": 10,
// 		"capacity": 7
// 	}, {
// 		"name": "aaracske",
// 		"degree": 4,
// 		"capacity": 2
// 	}]
// }
//
//   var actionPost = {
//     taskID: '3',
//     status: 'done',
//   },
//
//   return {
//     initPost: initPost,
//     actionPost: actionPost
//   };
// })();


var xhr = new XMLHttpRequest();
var url = 'https://alike-libra.gomix.me';

var postData = function () {
  xhr.open('POST', url + '/start');
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.send(JSON.stringify({
	"players": ["szur", "ct"],
	"liquids": [{
		"name": "kertsszaggat",
		"degree": 50,
		"capacity": 1
	}, {
		"name": "lanypia",
		"degree": 10,
		"capacity": 7
	}, {
		"name": "aaracske",
		"degree": 4,
		"capacity": 2
	}]
}))
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log();(xhr.response);
    };
  };
};

// postData();
// console.log(JSON.stringify({
// "players": ["szur", "ct"],
// "liquids": [{
//   "name": "kertsszaggat",
//   "degree": 50,
//   "capacity": 1
// }, {
//   "name": "lanypia",
//   "degree": 10,
//   "capacity": 7
// }, {
//   "name": "aaracske",
//   "degree": 4,
//   "capacity": 2
// }]
// }))
