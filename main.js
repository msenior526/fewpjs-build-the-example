// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('span.like-glyph')

modal.className = "hidden";

likeButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
      mimicServerCall()
      .then((resp) => {
        let heart = e.target; 
        if (heart.className != "activated-heart") {
          heart.innerText = FULL_HEART;
          heart.className = "activated-heart"
        } else {
          heart.innerText = EMPTY_HEART;
          heart.className = "";
        }
        console.log(resp)
      })
      .catch(() => {
        modal.className = ""
        setTimeout(() => {
          modal.className = "hidden"
        }, 3000)
      })
    })
  })


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
