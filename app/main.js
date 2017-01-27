'use strict'


var playerList = document.querySelector('.player-list');
var missionNote = document.querySelector('.mission_note');


// call this with res.result
function listRenderer(playerInfo) {

  playerInfo.result.forEach(function(drinker) {
    var liTag = document.createElement('li');
    var imgTag = document.createElement('img');
    var divTag = document.createElement('div');
    var h2Tag = document.createElement('h2');
    var divTag2 = document.createElement('div');
    var pTag = document.createElement('p');
    var spanTag = document.createElement('span');

    playerList.appendChild(liTag).classList.add('shadow');
    liTag.appendChild(imgTag).setAttribute('src', 'imgs/doomman1.png');
    liTag.appendChild(divTag).classList.add('player-info-box');
    divTag.appendChild(h2Tag).textContent = drinker.name;
    divTag.appendChild(divTag2).classList.add('player-points');
    divTag2.appendChild(pTag).textContent = drinker.point + ' points';
    divTag2.appendChild(spanTag).textContent = drinker.absolutA + ' dl';

    if (playerInfo.currentPlayerID === drinker.playerID) {
      liTag.setAttribute('id', 'active');
    }
  })
}


// call this with res.tasks
function missionUpdateder(task) {
  missionNote.classList.add('mission_active');
  missionNote.querySelector('h2').textContent = task.desc;
}
