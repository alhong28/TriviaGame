(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

//to call on the divs

const quizContainer = document.getElementById("quiz");

const resultsContainer = document.getElementById("result");

const submitButton = document.getElementById("submit");



//questions

const myQuestions = [
  {
    question: "Dennis is asshole, why Charlie hate?",
    answers: {
      a: "Dennis is Night Man!",
      b: "Dennis is bastard man!",
      c: "Dennis kills rats",
      d: "Dennis is asshole man!"
    },
    correctAnswer: "b"
  },
  {
    question: "What is Charlie's favorite food?",
    answers: {
      a: "Milk Steak",
      b: "Spaghetti",
      c: "Philly Cheese Steak",
      d: "Crow's Eggs"
    },
    correctAnswer: "a"
  },
  {
    question: "What did Dee try to scam the government with?",
    answers: {
      a: "A car",
      b: "The bar",
      c: "A baby",
      d: "Her job"
    },
    correctAnswer: "c"
  },
  {
  	question: "Why will women sleep with you on a boat?",
  	answers: {
  		a: "Because it's romantic",
  		b: "Because of the implication",
  		c: "Because you're rich",
  		d: "Because they will be drunk"
  	},
  	correctAnswer: "b"
  },
  {
  	question: "Where do they serve fresh fish daily?",
  	answers: {
  		a: "Guigino's",
  		b: "Bert's",
  		c: "Miyato",
  		d: "Seafood Galore"
  	},
  	correctAnswer: "a"
  },
  {
  	question: "What is the D.E.N.N.I.S. system?",
  	answers: {
  		a: "A system to scam anyone",
  		b: "A system to pick up any girl",
  		c: "A system for financial success",
  		d: "A system to persuade anyone to your side"
  	},
  	correctAnswer: "b"
  },
  {
  	question: "What does Charlie have to bash in the bar?",
  	answers: {
  		a: "Cockroaches",
  		b: "Mice",
  		c: "Rats",
  		d: "Bats"
  	},
  	correctAnswer: "c"
  },
  {
  	question: "What socioeconomic class does Frank consider himself a part of?",
  	answers: {
  		a: "Fringe Class",
  		b: "Upper Class",
  		c: "Homeless",
  		d: "Super Rich"
  	},
  	correctAnswer: "a"
  },
  {
  	question: "Where did Dennis and Dee have fond memories vacationing as teens?",
  	answers: {
  		a: "Paris",
  		b: "Italy",
  		c: "New York City",
  		d: "The Jersey Shore"
  	},
  	correctAnswer: "d"
  },
  {
  	question: "What is Charlie's job position in the bar?",
  	answers: {
  		a: "A janitor",
  		b: "A bartender",
  		c: "A server",
  		d: "A supervisor"
  	},
  	correctAnswer: "a"
  },
  {
  	question: "Charlie's mom is a what?",
  	answers: {
  		a: "An accountant",
  		b: "A teacher",
  		c: "A whore",
  		d: "A storeowner"
  	},
  	correctAnswer: "c"
  },
  {
  	question: "Who killed Mac's father?",
  	answers: {
  		a: "The mafia",
  		b: "Mac",
  		c: "The police",
  		d: "Dennis"
  	},
  	correctAnswer: "b"
  },
  {
  	question: "What was Rickety-Cricket's former occupation?",
  	answers: {
  		a: "A catholic priest",
  		b: "A policeman",
  		c: "A salesman",
  		d: "Was always homeless"
  	},
  	correctAnswer: "a"
  },
  {
  	question: "What is the waitress's name?",
  	answers: {
  		a: "Nikki Potnick",
  		b: "Grace Witherspoon",
  		c: "No one knows",
  		d: "Brittney B"
  	},
  	correctAnswer: "c"
  },
  {
  	question: "What does Maureen Ponderosa later identify as?",
  	answers: {
  		a: "A man",
  		b: "A cat",
  		c: "A buddhist",
  		d: "The reincarnation of Helen Keller"
  	},
  	correctAnswer: "b"
  }
];


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();