gsap.to(".img-parallax-page2", {
    y: -200,
    ease: "none",
    filter: "grayscale(100%)",
    scrollTrigger: {
        trigger: ".container-parallax-page2",
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
        // markers: {
        //     startColor: 'green',
        //     endColor: 'red',
        //     fontSize: '20px',
        // }
    }
});


// animasi text scroll =============================
// pin-selection-section
const scrollText1 = document.getElementById('scroll-text1');
const scrollText2 = document.getElementById('scroll-text2');
const scrollText3 = document.getElementById('scroll-text3');
const scrollText4 = document.getElementById('scroll-text4');

const scrollGroup = gsap.timeline({

    scrollTrigger: {
        trigger: ".pin-selection-section",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        // markers: true,
    }
})

scrollGroup.to(scrollText1, {
    // opacity: 1,
    x: '30%',
    ease: "power2.out",
}, 0);

scrollGroup.to(scrollText2, {
    // opacity: 1,
    x: '-30%',
    ease: "power3.out",
}, 0);

scrollGroup.to(scrollText3, {
    // opacity: 1,
    x: '38%',
    ease: "none",
}, 0);

scrollGroup.to(scrollText4, {
    // opacity: 1,
    x: '-38%',
    ease: "none",
}, 0);

scrollGroup.to(".scroll-textStyle", {
    fontSize: "6rem",
    marginTop: "-40px",
    marginBottom: "-25px",
    ease: "none",
}, 0);

// pagil dlu item yng ingin di scroll
// membuat variable -> item apa aja yang ingin di masukan ke pin



// animasi img clip-path =============================
gsap.utils.toArray(".reveal-img").forEach((img, i) => {
    gsap.to(img, {
        clipPath: "inset(0% 0% 0% 0%)",
        // filter: img.classList.contains("reveal-img1") ? "grayscale(20%)" : undefined, // hanya reveal-img1 yang dapat grayscale
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: img,
            start: "top 70%",
            end: "bottom 40%",
            scrub: img.classList.contains("reveal-img1") ? true : 2,
            toggleActions: "play none none reverse",
            //   markers: true
        }
    });
});

// animasi mengambang di page 2 (sinopsis)
// parallax tanpa wadah

gsap.to(".img1-parallax-page2", {
    y: -50,
    ease: "power2.out",
    
    scrollTrigger: {
        trigger: ".container1-parallax-page2",
        start: "top 90%",
        end: "bottom top",
        scrub: 2,

    }
});

gsap.to(".img2-parallax-page2", {
    y: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".container2-parallax-page2",
        start: "top 90%",
        end: "bottom top",
        scrub: 2,

    }
});

gsap.to(".img3-parallax-page2", {
    y: 100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".container3-parallax-page2",
        start: "top 90%",
        end: "bottom top",
        scrub: 2,

    }
});

gsap.to(".img4-parallax-page2", {
    y: -20,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".container4-parallax-page2",
        start: "top 90%",
        end: "bottom top",
        scrub: 2,

    }
});

gsap.to(".img5-parallax-page2", {
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".container5-parallax-page2",
        start: "top 90%",
        end: "bottom top",
        scrub: 2,

    }
});