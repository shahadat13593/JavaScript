'use strict';

// const modal = document.querySelector('.modal')
// const overlay = document.querySelector('.overlay')
// const btnCloseModal = document.querySelector('.close-modal')
// const btnOpenModal = document.querySelectorAll('.show-modal') 

// const openModal = function () {
//         // console.log('Button click');
//         modal.classList.remove('hidden')
//         overlay.classList.remove('hidden')
// }

// const closeModal = function () {
//     // console.log('btn');
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// } 

// for (let i = 0; i < btnOpenModal.length; i++){
//     // console.log(btnOpenModal[i].textContent);

//     btnOpenModal[i].addEventListener('click',openModal)
// }

// btnCloseModal.addEventListener('click', closeModal)
// overlay.addEventListener('click', closeModal)

// document.addEventListener('keydown', function (e) {
     
//     // console.log('key pressed');
//     // console.log(e.key);

//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//           closeModal()  

//     }
// })


const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnOpenModal = document.querySelectorAll('.show-modal') 
const btnCloseModal = document.querySelector('.close-modal')


const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

}
const closeModal = function () {
     modal.classList.add('hidden')
     overlay.classList.add('hidden')
} 
const escCloseModal = function (e) {
    
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
}

for (let i = 0; i < btnOpenModal.length; i++){
   btnOpenModal[i].addEventListener('click',openModal)
}


btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', escCloseModal)



