let currentIndex = 0;
const sections = document.querySelectorAll(".slide");
const container = document.getElementById("container");

function navigate(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= sections.length) currentIndex = sections.length - 1;

  container.style.transform = `translateY(-${currentIndex * 100}vh)`;
}

document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) navigate(1);
  else navigate(-1);
});
