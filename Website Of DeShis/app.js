const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logon = document.querySelector('#logon');
const guide1 = document.querySelector('#guide1');
const guide2 = document.querySelector('#guide2');
const guide3 = document.querySelector('#guide3');
const guide4 = document.querySelector('#guide4');
const headline = document.querySelector('.headline');

const t1 =new TimelineMax(); 

t1.fromTo(hero, 1,  { height:"0%"},  { height:"60%", ease: Power2.easeInOut }) 
.fromTo(
    hero,
    1.2,
    { width:"100%" },
    { width:"90%", ease: Power2.easeInOut },
)
  .fromTo(
    slider,
    1.2,
    { x:"-100%" },
    { x:"0%", ease: Power2.easeInOut },
    "-=1.2"
)
.fromTo(logon, 0.5, {opacity: 0, x: 30 }, {opacity: 1, x:0 }, "-=0.5")
.fromTo(guide1, 0.5, {opacity: 0, x: 30 }, {opacity: 1, x:0 }, "-=0.5")
.fromTo(guide2, 0.5, {opacity: 0, x: 30 }, {opacity: 1, x:0 }, "-=0.5")
.fromTo(guide3, 0.5, {opacity: 0, x: 30 }, {opacity: 1, x:0 }, "-=0.5")
.fromTo(guide4, 0.5, {opacity: 0, x: 30 }, {opacity: 1, x:0 }, "-=0.5")