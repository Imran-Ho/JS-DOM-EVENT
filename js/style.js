// // option three
// function makeRed(){
//     document.body.style.backgroundColor = 'red';
// }

// // option four
// const blueClick = document.getElementById('make-blue');
//         blueClick.onclick = makingBlue; // we can not call function directly from here.

//         function makingBlue (){
//             document.body.style.backgroundColor = 'blue';
//         }

// // option five

// const purple = document.getElementById('make-purple')
// purple.onclick = function makingPurple(){  // we can directly call function from here.
//     document.body.style.backgroundColor = 'purple';
// }

// // option six
// const pinkButton = document.getElementById('make-pink');
//        pinkButton.addEventListener('click', makingPink)

//        function makingPink(){
//         document.body.style.backgroundColor = 'pink'
//        }

// // option seven .
// const makingGreen = document.getElementById('make-green')
//        makingGreen.addEventListener('click', function makeGreen (){
//         document.body.style.backgroundColor = 'green';
//        })


// // most impotant and useful for next use.
// document.getElementById('orangeButton').addEventListener('click', function orangeClick (){
//     document.body.style.backgroundColor = 'orange';
// })



// // see down for status change.
// const statusChange = document.getElementById('see-down')
//        statusChange.addEventListener('click', function statusChanging (){
//         const showStatus = document.getElementById('show-status');
//         const h1 = document.createElement('h1');
//         h1.innerText = 'see the stutus changed';
//         showStatus.appendChild(h1);
//        })

// // second status change
// const secondButton = document.getElementById('see-down-second');
//        secondButton.addEventListener('click', function secondStatusButton (){
//         const secondStatus = document.getElementById('show-status-second');
//         const divCreate = document.createElement('div');
//         divCreate.innerHTML = `
//         <h2>Hi, this is innerHTML version.</h2>
//         `
//         secondStatus.appendChild(divCreate);

//        })

// // option ten............. on click status change function
// document.getElementById('update-button').addEventListener('click', function (){
//     const fieldText = document.getElementById('input-field');
//     const textValue = fieldText.value;
//     const setDefaultText = document.getElementById('default-text');
//     setDefaultText.innerText = textValue;
//     fieldText.value = '';
//    })