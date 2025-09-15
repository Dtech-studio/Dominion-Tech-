// -------------------- HERO ROTATING TEXT --------------------
const rotatingText = document.querySelector(".rotating-text");
const words = ["GRAPHIC DESIGN", "WEB DESIGN", "UI/UX", "BRANDING"];
let wordIndex = 0;

function rotateText() {
  rotatingText.textContent = words[wordIndex];
  rotatingText.classList.remove("fade");
  void rotatingText.offsetWidth; // trigger reflow for animation
  rotatingText.classList.add("fade");
  wordIndex = (wordIndex + 1) % words.length;
}

setInterval(rotateText, 1000);
rotateText();

// -------------------- ABOUT IMAGE SCROLL EFFECT --------------------
const aboutImg = document.querySelector(".about-img");

window.addEventListener("scroll", () => {
  const rect = aboutImg.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    aboutImg.classList.add("show");
  }
});

// -------------------- PORTFOLIO EXPAND ITEM --------------------
function expandItem(item) {
  const desc = item.querySelector(".card-content p");
  const img = item.querySelector(".card-img img");

  if (!desc || !img) return;

  if (item.classList.contains("expanded")) {
    item.classList.remove("expanded");
    img.style.height = "220px";
    desc.style.display = "block";
  } else {
    item.classList.add("expanded");
    img.style.height = "400px";
    desc.style.display = "block";
  }
}

/* -------------------- GALLERY MODAL --------------------
let slideIndex = 0;
let autoSlideInterval;

function openGallery() {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "block";
  showSlides(slideIndex);
  startAutoSlide();
}

function closeGallery() {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "none";
  clearInterval(autoSlideInterval);
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slides img");
  const dotsContainer = document.querySelector(".dots");
  dotsContainer.innerHTML = "";

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndex) ? "block" : "none";

    const dot = document.createElement("span");
    dot.classList.toggle("active", i === slideIndex);
    dot.onclick = () => {
      slideIndex = i;
      showSlides(i);
    };
    dotsContainer.appendChild(dot);
  });
}

// Auto-slide every 4s
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000);
}

// Change slide on hover
document.querySelectorAll(".slides img").forEach((img, i) => {
  img.addEventListener("mouseenter", () => {
    slideIndex = i;
    showSlides(i);
  });
});
*/
let slideIndex = 0;
let autoSlideInterval;

const slides = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");

function openGallery() {
  document.getElementById("galleryModal").style.display = "block";
  showSlide(slideIndex);
  startAutoSlide();
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
  clearInterval(autoSlideInterval);
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
  });

  // Dots
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.toggle("active", i === n);
    dot.addEventListener("click", () => {
      slideIndex = i;
      showSlide(slideIndex);
    });
    dotsContainer.appendChild(dot);
  });
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 2000);
}

// Optional: show slide on hover
slides.forEach((slide, i) => {
  slide.addEventListener("mouseenter", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
// Close hamburger menu on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('header nav');
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
});
//COUNT DOWN TIMER
// Countdown Timer
function startCountdown() {
  // Class start and end dates
  const startDate = new Date("September 23, 2025 00:00:00").getTime();
  const endDate = new Date("September 25, 2025 23:59:59").getTime();

  const countdown = document.getElementById("countdown");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const timer = setInterval(() => {
    const now = new Date().getTime();

    // Before class starts → countdown to start
    if (now < startDate) {
      const distance = startDate - now;
      updateTimer(distance);
    }
    // During class → countdown to end
    else if (now >= startDate && now <= endDate) {
      const distance = endDate - now;
      updateTimer(distance);
    }
    // After class ends → show expired
    else {
      clearInterval(timer);
      countdown.innerHTML = "✅ Class Ended!";
    }
  }, 1000);

  function updateTimer(distance) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }
}

startCountdown();