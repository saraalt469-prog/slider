let blockWr = document.querySelector(".img-wr");
let prev = document.querySelector(".block-btn-prev");
let next = document.querySelector(".block-btn-next");
let dotcont = document.querySelector(".dots-container");

let t = blockWr.children.length;
let c = 0;

for (let i = 0; i < t; i++) {
  let dot = document.createElement("p");
  dot.classList.add("dot");

  if (i === 0) {
    dot.classList.add("active");
  }
  dotcont.appendChild(dot);
}
let dots = document.querySelectorAll(".dot");

function slider() {
  blockWr.style.transform = `translateX(-${c * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === c);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    c = i;
    slider();
  });
});

next.addEventListener("click", () => {
  if (c < t - 1) {
    c++;
    slider();
  } else {
    c = 0;
    slider();
  }
});
prev.addEventListener("click", () => {
  if (c > 0) {
    c--;
    slider();
  } else {
    c = t - 1;
  }
  slider();
});

let autoSlide;
function autoPlay() {
  c = (c + 1) % t;
  slider();

  autoSlide = setTimeout(autoPlay, 4000);
}

autoPlay();
