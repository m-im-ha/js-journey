'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ..............button scrolling
btnScrollTo.addEventListener('click', function(e){
  // ...........old school way
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  // ..........Modern way
  section1.scrollIntoView({behavior:'smooth'});

});

//....page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior : 'smooth'}); 
//   })
// })

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior : 'smooth'});
  }
})

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');

  // guard clause
  if(!clicked) return;

  // remove active classes
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'))
  
  //active tab
  clicked.classList.add('operations__tab--active')

  // activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// Menu fade animation

const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
   
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el=>{
      if(el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

// passing 'argument' into handler
nav.addEventListener('mouseover',handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));

// Sticky navigation: Intersection observer API
// const obsCallback = function(entries, observer){
//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;
 
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section')

const revealSection = function(entries,observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})
allSections.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);

}

const imgObserver = new IntersectionObserver(loadImg,{
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img=> imgObserver.observe(img));

//slider

const slider = function(){
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length-1;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-1200px)';
// slider.style.overflow = 'visible';

const createDots = function() {
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend',`<button class='dots__dot' data-slide='${i}'></button>`)
  })
}

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot=>dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide='${slide}']`).classList.add('dots__dot--active');
}


const goToslide = function(slide){
  slides.forEach((s, i)=> (s.style.transform = `translateX(${100 * (i - slide)}%)`));
}


const nextSlide = function() {
  if(curSlide === maxSlide){
    curSlide = 0;
  }else{

    curSlide++;
  }

  goToslide(curSlide);
  activateDot(curSlide);
}

const prevSlide = function(){
  if(curSlide === 0){
    curSlide = maxSlide;
  }else{
    curSlide--;
  }
  goToslide(curSlide);
  activateDot(curSlide);
}

const init = function(){
  goToslide(0);
  createDots();
  activateDot(0);
}
init()

//next slide
btnRight.addEventListener('click', nextSlide);
//prev slide
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown' ,function(e){
  if(e.key === 'ArrowLeft') prevSlide();
  if(e.key === 'ArrowRight') nextSlide();
});

dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToslide(slide);
    activateDot(slide);
  }
})
};
slider();

////////////////////////////////////////////////////////////////

// const h1 = document.querySelector('h1');

// const alerth1 = function(e){
//   alert('mouse entered on h1 element');
// };

// h1.addEventListener('mouseenter', alerth1);

// setTimeout(()=>h1.removeEventListener('mouseenter', alerth1),9000);

//Galaxy-M02   192.168.0.5	  a0:d7:22:ed:14:6e


// selecting elements

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
// const sectionAll = document.querySelectorAll('.section');
// console.log(sectionAll);
// const allBtn = document.getElementsByTagName('button');
// console.log(allBtn);
// console.log(document.getElementsByClassName('btn'));

// creating and inserting elements

// const header = document.querySelector('.header');
// const msg = document.createElement('div');
// msg.classList.add('cookie-message');
// msg.innerHTML = `Fuck you dao.<button class='btn btn-close-cookie'>aaa</button>`;
// header.prepend(msg);
// header.append(msg);
// header.append(msg.cloneNode(true));

// document.querySelector('.btn-close-cookie').addEventListener('click', function(){
//   msg.remove();
// })
// msg.style.backgroundColor = 'coral';
// console.log(getComputedStyle(msg));
// console.log(getComputedStyle(msg).color);
// console.log(getComputedStyle(msg).height);
// msg.style.height = Number.parseFloat(getComputedStyle(msg).height,10) + 50 + 'px';
// document.documentElement.style.setProperty('--color-primary','orangered');

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = 'exercise regularly';
// console.log(logo.alt);
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));
// console.log(logo.dataset.versionNumber);

/*
const randomInt = (min,max) => Math.floor(Math.random() * (max-min+1)+min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0,255));

document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('link',e.target,e.currentTarget);
  console.log(this === e.currentTarget);
  console.log(this === e.target);

  // stop propagation
  // e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('container',e.target,e.currentTarget);
})

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('nav',e.target,e.currentTarget);
})
*/

// const h1 = document.querySelector('h1');
// going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'brown';
// h1.lastElementChild.style.color = 'skyblue';

// going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.backgroundColor = 'yellow';
// h1.closest('h1').style.backgroundColor = 'green';

// going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// })

document.addEventListener('DOMContentLoaded', function(e){
  console.log('html', e);
});

window.addEventListener('load', function(e){
  console.log('page loaded', e);
})


/////////////////////////////////////////////

//OPPO-A95	     192.168.0.5	          5add06746017       5a:dd:06:74:60:17
//Galaxy-M02	    192.168.0.7	          6eda83c0562f
//realme-C33	   192.168.0.10	       3e0c4ba40305      3e:0c:4b:a4:03:05
//vivo-1906	      192.168.0.12	     06:0b:92:fa:ee:d9    060b92faeed9

//....................
//M2010J19CG-POCOM3.hi	192.168.0.3	      08:1c:6e:01:80:54       081c6e018054
//realme-10	      192.168.0.2	          82:91:8e:b2:76:ac        82918eb276ac
//HUAWEI_Y5_2017	    192.168.0.8	           bc:3d:85:8c:91:82     bc3d858c9182
//DESKTOP-IONRO8G	      192.168.0.9      	74:c6:3b:51:50:ef            74c63b5150ef
//OPPO-A5s	        192.168.0.4	          9c:5f:5a:8a:04:99      9c5f5a8a0499