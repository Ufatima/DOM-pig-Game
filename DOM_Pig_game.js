// dom access and manipulation

/*
var score, roundscore, active_player;

scores = [0,0];
roundscore = 0;
active_player = 1;

dice = Math.floor(Math.random() *6 ) + 1;

// our first DOM manipulation which means this querySelector method here to manipulate to change values in elements of our webpage
// here we say it a setter because we set a value
document.querySelector('#current-' + active_player).textContent = dice;
//document.querySelector('#current-' + active_player).innerHTML = '<em>' + dice + '</em>';


// to read the value of an element & here we say it as a getter because we get a value
var x = document.querySelector('#score-1').textContent;
console.log(x);

// use querySelector to change the css of an element
document.querySelector('.dice').style.display = 'None';

*/


//dom access, event creation and manipulation

var score, active_player, roundscore;

scores = [0,0];
roundscore = 0;
active_player = 0;

// use querySelector to change the css of an element
document.querySelector('.dice').style.display = 'None';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
	// 1. Random number
	var dice = Math.floor(Math.random()*6) + 1;

	// 2. Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	// 3. Update round score IF the rolled number was NOT a 1
	if (dice !== 1){
		// Add score
		roundscore += dice;
		document.querySelector('#current-' + active_player).textContent = roundscore;
	} else {
		// Next player turn
		nextPlayer();
			}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	// Add current score to global score
	scores[active_player] = scores[active_player] + roundscore;

	// update the UI
	document.querySelector('#score-' + active_player).textContent = scores[active_player];

	// And check if player won the game
	if(scores[active_player] >= 20){
		document.querySelector('#name-' + active_player).textContent = 'winner!'
		document.querySelector('.dice').style.display = 'None';
		document.querySelector('.player-' + active_player + '-panel').classList.add('winner');
		document.querySelector('.player-' + active_player + '-panel').classList.remove('active')

	} else{
		// Next player
		nextPlayer();
	}
	
});

function nextPlayer() {
		// Ternary operatorcondition ? value if true : value if false
		active_player === 0 ? active_player = 1 : active_player = 0;

		/*
		if (active_player === 0){
			active_player = 1;
		} else {
			active_player = 0;
		}
		*/

		roundscore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		// removing and adding classes
		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

		// toggle to adds the class  if it's not there and if it's there to remove
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'None';
}