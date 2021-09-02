const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logon = document.querySelector('#logon');
const guiden = document.querySelector('.guiden');
const headline = document.querySelector('.headline');

const t1 =new TimelineaMax();

t1.fromTo(hero,1, { height:"0%"}, { height:"80%", ease: Power2.easeInOut }) ;