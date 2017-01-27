var manipulateInputs = (function (){
  var addPlayer = document.querySelector('#add_player');
  var inputsToAdd = document.querySelector('.handle_player');
  var container = document.querySelector('.players');

  var plusPlayer = function () {
    if (document.querySelectorAll('.handle_player').length <= 10){
      var newInput = inputsToAdd.cloneNode(true);
      newInput.querySelector('.delete_player').addEventListener('click', function () {
        container.removeChild(newInput);
      })
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

  var plusAlcohol = function () {
    var newInputs = selectorToAdd.cloneNode(true);
    newInputs.querySelector('input').value = '';
    newInputs.querySelector('.delete').addEventListener('click', function () {
      alcoholContainer.removeChild(newInputs);
    });
    alcoholContainer.appendChild(newInputs);
  };



  addAlcohol.addEventListener('click', plusAlcohol);

// delete unnecceserry lines with button


  return {
    addPlayer: plusPlayer,
    addAlcohol: plusAlcohol,
  };
}());
