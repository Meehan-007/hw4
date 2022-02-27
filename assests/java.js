// wk4 java 
// save score 

var question4 = document.getElementById('question');
var answers2 = document.getElementById('answers');
var submitButton = document.getElementById('submit'); 
var start = document.getElementById('start'); 
var container = document.getElementById('questioncontainer');
var correcttotal = 0; 
var wrongtotal = 0;  
var score = document.getElementById('score');
var savehighscores = document.getElementById('savehighscore');
let QuestionIndex, shuffledQuestions; 
var s=9; 
var m=0;
var q; 




var startquiz = function () { 
    start.classList.add('hide'); 
	container.classList.remove('hide'); 
	shuffledQuestions = questions.sort(() => Math.random() - .5);
	QuestionIndex = 0; 
	
	s=59; 
    m=1; 
	
	quizCount ();
	reset()
    
	
}  


function quizCount()
{
	
document.getElementById('timer').value=m+":"+s+" remaining" 

s=s-1
q=setTimeout("quizCount()", 1000) 

if (wrongtotal = [1,2,3,4,5,6,7,8]) 
{s=s-10;}
if (s<1)
{ m=m-1; s=59;}

if (m<0)
{ 
	
endgame(); 

}
} 

var reset = function () { 
	while (answers2.firstChild) {
		answers2.removeChild(answers2.firstChild)
	  } 
	  correcttotal = 0; 
	  wrongtotal = 0; 
	  loadquestions(shuffledQuestions[QuestionIndex]);  
}

var reset2 = function () { 
	while (answers2.firstChild) {
		answers2.removeChild(answers2.firstChild)
	  } 
	  QuestionIndex++ 
	  loadquestions(shuffledQuestions[QuestionIndex]);
}



var loadquestions = function (question) { 
	question4.innerText = question.question 
	question.answers.forEach(answer => { 
	const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
	if (answer.correct) {
		button.dataset.correct = answer.correct
	  }
	  button.addEventListener('click', answersing)
	  answers2.appendChild(button)	
	})
    
}

var answersing = function (button) { 
	
	
	const selectedButton = button.target
	const correct = selectedButton.dataset.correct



	rightorwrong(selectedButton, correct);
} 

var endgame = function () { 
	clearTimeout(q); 
	var totalscore = wrongtotal + correcttotal;  
	
	var percentage2 = (Math.floor((correcttotal / totalscore) * 100)); 
	
	
	container.classList.add('hide'); 



	score.classList.remove('hide'); 
	var scores = document.getElementById('scoreH');
    scores.innerText = percentage2 + '%'
    button.classList.add('scoreH')
	
}

var rightorwrong = function (selectedButton, correct) { 
	if (correct) {
		selectedButton.classList.add('correct');  
		selectedButton.classList.remove('btn')
	//	setTimeout(rightorwrong,3000); 
	    correcttotal++ 
	  setTimeout(quizcontrol, 1000); 
	  console.log(correcttotal) 
	  } else {
		selectedButton.classList.add('wrong'); 
		selectedButton.classList.remove('btn')
      //  setTimeout(rightorwrong,3000); 
	   wrongtotal++ 
	   console.log(wrongtotal)
	   setTimeout(quizcontrol, 1000);
} 
} 

var quizcontrol = function () { 
	if (shuffledQuestions.length > QuestionIndex + 1) {
		reset2();
  } else {
        endgame();
  }
}

var newgame = function () { 
	score.classList.add('hide'); 
    start.classList.remove('hide'); 
} 

start.addEventListener('click', startquiz) 
savehighscores.addEventListener('click', newgame) 

const questions = [
	{
	  question: 'What is 2 + 2?',
	  answers: [
		{ text: '4', correct: true },
		{ text: '22', correct: false }
	  ]
	},
	{
	  question: 'Who is the best YouTuber?',
	  answers: [
		{ text: 'Web Dev Simplified', correct: true },
		{ text: 'Traversy Media', correct: true },
		{ text: 'Dev Ed', correct: true },
		{ text: 'Fun Fun Function', correct: true }
	  ]
	},
	{
	  question: 'Is web development fun?',
	  answers: [
		{ text: 'Kinda', correct: false },
		{ text: 'YES!!!', correct: true },
		{ text: 'Um no', correct: false },
		{ text: 'IDK', correct: false }
	  ]
	},
	{
	  question: 'What is 4 * 2?',
	  answers: [
		{ text: '6', correct: false },
		{ text: '8', correct: true }
	  ]
	}
  ]