// ==== LOADING PAGE ====
let progress = 0;
const loadingText = document.getElementById('loadingText');
const progressFill = document.getElementById('progressFill');
const visitBtn = document.getElementById('visitBtn');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('mainContent');
const splitLeft = document.getElementById('splitLeft');
const splitRight = document.getElementById('splitRight');
const splitWrapper = document.getElementById('splitWrapper');
const lightLineWrapper = document.getElementById('lightLineWrapper');
const lightLine = document.getElementById('lightLine');

// Animate progress
const intervalProgress = setInterval(() => {
  progress += 1;
  loadingText.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;

  if (progress >= 100) {
    clearInterval(intervalProgress);
    loadingText.style.display = "none";
    progressFill.parentElement.style.display = "none";
    visitBtn.style.display = 'block';
    setTimeout(() => {
      visitBtn.style.opacity = 1;
    }, 50);
  }
}, 1);

// Disable scroll on load
window.onload = function() {
  document.body.style.overflow = "hidden";
  document.body.classList.add('overflow-hidden');
  loader.style.display = 'flex';
  mainContent.classList.remove('visible');
  splitWrapper.style.display = 'flex';
  splitLeft.classList.remove('animate');
  splitRight.classList.remove('animate');
  lightLineWrapper.style.display = 'none';
  lightLineWrapper.classList.remove('hide');
};

// Enable scroll after everything is visible
function enableScroll() {
  document.body.style.overflow = "auto";
  document.body.classList.remove('overflow-hidden');
}

visitBtn.querySelector('button').onclick = function() {
  loader.style.display = 'none';
  lightLineWrapper.style.display = 'flex';
  setTimeout(() => {
    lightLineWrapper.classList.add('hide');
    setTimeout(() => {
      lightLineWrapper.style.display = 'none';
      splitLeft.classList.add('animate');
      splitRight.classList.add('animate');
      setTimeout(() => {
        splitWrapper.style.display = 'none';
        mainContent.classList.add('visible');
        enableScroll();
      }, 1000);
    }, 500);
  }, 800);
};

// Navigation handler (keep only this, remove the others)
function handleNavLink(linkId, sectionId) {
  const link = document.getElementById(linkId);
  const section = document.getElementById(sectionId);
  if (!link || !section) return;

  link.addEventListener('click', function(e) {
    e.preventDefault();
    splitWrapper.style.display = 'flex';
    splitLeft.classList.remove('animate');
    splitRight.classList.remove('animate');
    section.scrollIntoView({ behavior: 'auto' });
    setTimeout(() => {
      splitLeft.classList.add('animate');
      splitRight.classList.add('animate');
      setTimeout(() => {
        splitWrapper.style.display = 'none';
      }, 1000);
    }, 10);
  });
}
handleNavLink('page1LinkMain', 'castFavorite');

handleNavLink('homeLink', 'home');
handleNavLink('sinopsisLink', 'sinopsis');
handleNavLink('castLink', 'castFavorite');
handleNavLink('homeLinkFooter', 'home');
handleNavLink('sinopsisLinkFooter', 'sinopsis');
handleNavLink('castLinkFooter', 'castFavorite');

// ==== IMG SLIDER PERTAMA ====

const container = document.getElementById("hover-img1Page1");
const images = container.querySelectorAll(".imgpage1-container img");
let index1 = 0;
let imgInterval1;

container.addEventListener("mouseenter", () => {
  imgInterval1 = setInterval(() => {
    const current = images[index1];
    index1 = (index1 + 1) % images.length;
    const next = images[index1];

    gsap.set(next, {
      y: "-100%",
      zIndex: 2,
    });

    gsap.to(next, {
      y: "0%",
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: () => {
        images.forEach((img) => {
          if (img !== next) {
            gsap.set(img, {
              y: "0%",
              zIndex: 0
            });
          }
        });

        gsap.set(next, {
          zIndex: 1
        });
      }
    });
  }, 300);
});

container.addEventListener("mouseleave", () => {
  clearInterval(imgInterval1);
  images.forEach((img, i) => {
    gsap.set(img, {
      y: "0%",
      zIndex: i === index1 ? 1 : 0
    });
  });
});


// ==== IMG SLIDER KEDUA ====

const container2 = document.getElementById("hover-img2Page1");
const images2 = container2.querySelectorAll(".img2page1-container img");
let index2 = 0;
let imgInterval2;

container2.addEventListener("mouseenter", () => {
  imgInterval2 = setInterval(() => {
    const current = images2[index2];
    index2 = (index2 + 1) % images2.length;
    const next = images2[index2];

    gsap.set(next, {
      y: "-100%",
      zIndex: 2,
    });

    gsap.to(next, {
      y: "0%",
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: () => {
        images2.forEach((img) => {
          if (img !== next) {
            gsap.set(img, {
              y: "0%",
              zIndex: 0
            });
          }
        });

        gsap.set(next, {
          zIndex: 1
        });
      }
    });
  }, 300);
});

container2.addEventListener("mouseleave", () => {
  clearInterval(imgInterval2);
  images2.forEach((img, i) => {
    gsap.set(img, {
      y: "0%",
      zIndex: i === index2 ? 1 : 0
    });
  });
});


// ==== CUSTOM CURSOR ====

const cursorImg = document.getElementById("cursorImage");

document.addEventListener("mousemove", (e) => {
  cursorImg.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

function changeCursor(newSrc) {
  cursorImg.src = newSrc;
}