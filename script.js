// Getting video element and overlay element
const video = document.getElementById('my-video');
const overlay = document.getElementById('question-overlay');

// Setting the time in seconds for  the question to appear
const questionTime = 209; 

// Variable to keep track of whether the question was answered
let questionAnswered = false;

// Adding event listener to the video's timeupdate event
video.addEventListener('timeupdate', function() {
  // Checking if the current time of the video is equal to or greater than the question time
  if (video.currentTime >= questionTime && !questionAnswered) {
    // Pause the video
    video.pause();

    // Show the overlay
    overlay.style.display = 'block';
  }
});

// Function to resume the video based on the user's answer
function resumeVideo(answer) {
  if (answer === 'yes') {
    // Display 'wow' when the user clicks 'Yes'
    overlay.innerHTML = '<p>Acceptable, but was it worth the wait?</p>';
  } else if (answer === 'no') {
    // Display 'oh no' when the user clicks 'No'
    overlay.innerHTML = '<p>Unacceptable, but sometimes silence speaks louder</p>';
  }

  // Hiding the overlay after 3 seconds
  setTimeout(function() {
    overlay.style.display = 'none';
    // Resume the video
    video.play();
  }, 3000);

  // Setting the questionAnswered flag to true
  questionAnswered = true;
}


// Function to handle share button click
function shareVideo() {
  const shareLink = 'https://drive.google.com/drive/folders/1J-fqB_BCitFZAgX7O0-9lvch-cAVJVjx';
  window.location.href = shareLink;
}

// Function to handle like button click
function likeVideo() {
  const likeButton = document.getElementById('like-button');
  const dislikeButton = document.getElementById('dislike-button');

  // Removing active class from dislike button if it was active
  if (dislikeButton.classList.contains('active')) {
    dislikeButton.classList.remove('active');
  }


  likeButton.classList.toggle('active');
}

// Function to handle dislike button click
function dislikeVideo() {
  const dislikeButton = document.getElementById('dislike-button');
  const likeButton = document.getElementById('like-button');

  // Removing active class from like button if it was active
  if (likeButton.classList.contains('active')) {
    likeButton.classList.remove('active');
  }


  dislikeButton.classList.toggle('active');
}