// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add a modal element to the DOM
document.addEventListener('DOMContentLoaded', () => {
  // Create the modal element
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.style.display = 'none'; // Hidden by default
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <p>Modal Content</p>
    </div>
  `;

  // Append the modal to the body
  document.body.appendChild(modal);

  // Add event listener to close the modal
  const closeButton = modal.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
