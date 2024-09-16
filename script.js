// ------ Play/Stop Buttons ------ //

window.onload = function () {
  const images = document.querySelectorAll(".IMG");

  const audio = document.getElementById("audio_music");
  const yes_button = document.getElementById("yes_button");
  const no_button = document.getElementById("no_button");
  let count = 0;

  function play() {
    if (count === 0) {
      count = 1;
      audio.play();
    }
  }

  function stop() {
    if (count === 1) {
      count = 0;
      audio.pause();
    }
    audio_music.currentTime = 0;
  }

  yes_button.addEventListener("click", play);
  no_button.addEventListener("click", stop);
};

// ----- Image Popup ----- //

// document.querySelectorAll('.NatureOne .NatureTwo .theSecondSectionOne .theSecondSectionTwo img').forEach(IMG =>{
//   IMG.onclick = () =>{
//      document.querySelector('.popupIMG').style.display = 'block';
//      document.querySelector('.popupIMG img').src = IMG.getAttribute('src');

//   }

// });

//   document.querySelector('.popupIMG span').onclick = () =>{
//   document.querySelector('.popupIMG').style.display = 'none';
//   }

// ----- Cursor ----- //

// window.onload = function () {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    animateCircles();
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = coords.x - 12 + "px";
      circle.style.top = coords.y - 12 + "px";
      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (next.Circle.x - x) * 0.5;
      y += (next.Circle.y - y) * 0.5;
    });
  }
// };
