'use strict';

// ! Basic DOM

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number'

// console.log(document.querySelector('.message').textContent);



// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//! ============================

// let secretNumber = Math.trunc((Math.random() * 20) + 1)
// let score = 20;
// let highScore = 0;
// const displayMessage = function (message) {
//    return  document.querySelector('.message').textContent = message;
// }



// document.querySelector('.number').textContent = secretNumber


// // ! Handling click events

// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);
//  // ! When there is no input
//     if (!guess) {
//         displayMessage(' ⛔ No number')
//         // ! When player win
//     } else if (guess === secretNumber) {
//         document.querySelector('.number').textContent = secretNumber
//         displayMessage('🥳 Correct Number! 🎉')
//         document.querySelector('body').style.backgroundColor = '#60b347'
//         document.querySelector('.number').style.width = '30rem'

//         if (score > highScore) {
//                     highScore = score;
//                     document.querySelector('.highscore').textContent = highScore
//         }
//     } else if (guess !== secretNumber) {
//             if (score > 1) {
//             score--
//                 document.querySelector('.score').textContent = score
//                 displayMessage( guess > secretNumber ? '⬆ Too High' : '⬇ Too Low')
//         }else {
//             displayMessage("❌ You lost the game.")
//             document.querySelector('.score').textContent = 0
//         }
//         }
// })




// =========================================
// // ! When guess is high
//     else if (guess > secretNumber) {
        
//         if (score > 1) {
//                 document.querySelector('.message').textContent = '⬆ Too High'
//                 score--
//                 document.querySelector('.score').textContent = score
//         } else {
//             document.querySelector('.message').textContent = "❌ You lost the game."
//             document.querySelector('.score').textContent = 0
//         }
//      // ! When guess is low
//     } else if (guess < secretNumber) {
        
//         if (score > 1) {
//             document.querySelector('.message').textContent = '⬇ Too Low'
//           score--
//         document.querySelector('.score').textContent = score
//         } else {
//             document.querySelector('.message').textContent = "❌ You lost the game."
//              document.querySelector('.score').textContent = 0
//         }
        
// }
    

// =========================================


// ! Reset EveryThing

// document.querySelector('.again').addEventListener('click', function () {

//     displayMessage('Start guessing...')
//     score = 20
//     document.querySelector('.score').textContent = score;
//     secretNumber = Math.trunc((Math.random() * 20) + 1)
//     document.querySelector('body').style.backgroundColor = '#222'
//     document.querySelector('.number').textContent = '?'
//     document.querySelector('.number').style.width = '15rem'
//     document.querySelector('.guess').value = ''
// })




// // ? Variable Declare
// const message = document.querySelector('.message')
// const scoreEL = document.querySelector('.score')
// const hightScoreEL = document.querySelector('.highscore')



// // ? Applying Logic
// const secretNumber = Math.trunc(Math.random()*21)
// const number = document.querySelector('.number').textContent = secretNumber
// let score = 20;



// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value)
    

//     if (!guess) {
//         message.textContent = "⛔ No number"
       
//     } else if (guess === secretNumber) {
//        message.textContent = "🎉 Correct Number"
        
//     } else if (guess > secretNumber) {
//         if (score > 1) {
//          message.textContent = "↖ Too High"
//          score--
//          scoreEL.textContent = score
//         }else {
//          message.textContent = '❌ You lost the game!'
//          scoreEL.textContent = 0
       
//         }
//     }else if (guess < secretNumber) {
//         if (score > 1) {
//          message.textContent = "↙ Too Low"
//          score--
//          scoreEL.textContent = score
//         } else {
//          message.textContent = '❌ You lost the game!'
//          scoreEL.textContent = 0
//       }
//     }
// })

// ? Declaring Variable

let messageEL = document.querySelector('.message');
let scoreEL = document.querySelector('.score')
const highScoreEl = document.querySelector('.highscore')
const guessEL = document.querySelector('.guess')
const check = document.querySelector('.check')
const numberEL = document.querySelector('.number')
const again = document.querySelector('.again')




// ? implementing logic

let secretNumber = Math.trunc(Math.random() * 21)

let score = 20;
let highScore = 0

const displayMessage = function (message) {
   return messageEL.textContent = message
}

const changeCss = function (backgroundColor, width) {
    document.querySelector('body').style.backgroundColor = backgroundColor;
    document.querySelector('.number').style.width = width

}

check.addEventListener('click', function () {
    
    const guess =Number(guessEL.value)
    console.log(guess);
    // ! if there is no number.
    if (!guess) {
         displayMessage('⛔ No Number!')   
    }// ! when guess is correct
    else if (guess === secretNumber) {

        displayMessage('🎉 Correct Number!')
        changeCss('#60b347', '30rem')
        numberEL.textContent = secretNumber

        if (score > highScore) {
            highScore = score
            highScoreEl.textContent = highScore

        }

    }// ! When guess is not correct
    else if (guess !== secretNumber) {
        if (score > 1) {
            score--
            scoreEL.textContent = score
            messageEL.textContent = guess > secretNumber ? "↗ Too High": "↙ Too Low"

        } else {
            scoreEL.textContent = 0
            displayMessage('❌ You lost the game!')
        }
 
    } 
})

// !  Resent Button

again.addEventListener('click', function () {

    displayMessage('Start guessing...')
    changeCss('#222', '15rem') 
    score = 20
    scoreEL.textContent = score
    secretNumber = Math.trunc(Math.random() * 21)
    numberEL.textContent = '?';
    guessEL.value = '' 

})