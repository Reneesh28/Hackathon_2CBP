const animatedImage = document.getElementById("animated-image");

function toggleAnimation() {
  if (animatedImage.style.animationPlayState === "paused") {
    animatedImage.style.animationPlayState = "running";
  } else {
    animatedImage.style.animationPlayState = "paused";
  }
}

document.getElementById("start-stop-btn").addEventListener("click", toggleAnimation);