document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // section-title__square



  // call library function
  Splitting();
  //  register scrollTrigger 

  gsap.registerPlugin(ScrollTrigger);





  //  square animation

  gsap.from('.section-title__square', {
    scrollTrigger: {
      trigger: 'section-title__square',
      start: "top top",
      duration: 2,
      scrub: 1,
    },
    rotate: -720,
    ease: 'none',
    duration: 2,
  });



  // main title animation
  const gT1 = gsap.timeline();
  gT1.from('.title .char', 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: 'back.out' });


  const gsapTitles = gsap.utils.toArray('.animated_block');

  // ticker  text
  const marq = document.querySelectorAll('.header__marq-txt');


  

  // benefits num 
  function benefits() {
    gsap.from('.benefits__num', {
      x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
      scrollTrigger: {
        trigger: '.benefits__list',
        start: 'top bottom',
        scrub: 1.9
      }
    })
  }
  benefits();

  function contact() {
		gsap.from('.cont__item-arrow', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.serv__list',
				start: 'top bottom',
				scrub: 1.9, 
      
			}
   
		})
	}
	contact();



  marq.forEach((elem) => {
    gT1.to(elem, {
      x: 300,
      duration: 3,
      ease: 'none',
      scrollTrigger: {
        trigger: elem,

        duration: 3,
        scrub: 1,
      },
    });
  });

  gsapTitles.forEach((gsTitle) => {
    const textChar = gsTitle.querySelectorAll('.char');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: gsTitle,
        start: 'top 100%',
        end: '40% 50%',
        toggleActions: 'play none none none',

        markers: true,
        scrub: 1,
      },
    });

    tl.from(textChar, 1, { opacity: 0, yPercent: 130, stagger: 0.02, ease: 'back.out' });
  });
});






