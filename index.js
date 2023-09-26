// const local = document.querySelector('.js-local');
// const session = document.querySelector('.js-session');

// local.addEventListener('click', onLocal);
// session.addEventListener('click', onSession);

// const arr = [1, 2, 3];
// function onLocal(e) {
//   localStorage.setItem('local', JSON.stringify(arr));
//   console.log(JSON.parse(localStorage.getItem('local')));
// }

// function onSession(e) {
//   sessionStorage.setItem('session', 'on session');
// }

// import {instruments} from './instruments'
// import { createMarkup } from './helpers/cards';
// import * as basicLightbox from 'basiclightbox';

// const container = document.querySelector('js-container');
// createMarkup(container, instruments);

// container.addEventListener('click', onClick);

// function onClick(e) {
//   e.preventDefault();
//   if (e.target.classList.contains('js-info')) {
//     const li = e.target.closest('js-card');
//     const productId = Number(li.dataset.productID);
//     const currentProduct = instruments.find(({ id }) => id === productId);
//     createModal(currentProduct);
//   } else if (e.target.classList.contains('js-favourite')) {
//   }
// // }
// const box = document.querySelector('.js-box');
// const timer = document.querySelector('.js-timer');

// setTimeout(() => {
//   box.style.display = 'block';
//   let counter = 10;

//   const id = setInterval(() => {
//     counter -= 1;
//     timer.textContent = counter;
//     if (!counter) {
//       clearInterval(id);
//       timer.textContent = 'x';
//       timer.addEventListener('click', () => {
//         box.style.display = 'none';
//       });
//     }
//   }, 1000);
// }, 5000);

// const currentTime = new Date();
// const futureTime = new Date('4-12-2023');
// console.log(futureTime);

// const year = document.querySelector('.date-year');
// const month = document.querySelector('.date-month');
// const day = document.querySelector('.date-day');
// const date = document.querySelector('.date');
// const digitalCLock = document.querySelector('.digital-clock');
// const hoursArrow = document.querySelector('.clock-hours__arrow');
// const minutesArrow = document.querySelector('.clock-minutes-arrow');
// const secondsArrow = document.querySelector('clock-seconds-arrow');

// const namesOfMonth = [];
// const arrDay = [];

// setInterval(() => {
//   const currentTime = new Date();
//   const currentYear = currentTime.getFullYear();
//   const currentMOnth = namesOfMonth[currentTime.getMonth()];
//   const currentDay = namesOfMonth[currentTime.getDay()];
//   const currentDate = namesOfMonth[currentTime.getDate()];

//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const seconds = currentTime.getSeconds();

//   const secondDeg = 360 / 60;
//   const minutesDeg = 360 / 60;
//   const hoursDeg = 360 / 12;

//   const formatTIme = `Current time: ${hours
//     .toString()
//     .padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds
//     .toString()
//     .padStart(2, '0')}`;

//   secondsArrow.style.transform = `rotate(${seconds * secondDeg}deg)`;
//   minutesArrow.style.transform = `rotate(${minutes * minutesDeg}deg)`;
//   hoursArrow.style.transform = `rotate(${
//     hours * hoursDeg + (hoursDeg / 60) * minutes
//   }deg)`;

//   year.textContent = currentYear;
//   month.textContent = currentMOnth;
//   day.textContent = currentDay;
//   date.textContent = currentDate;
// }, 1000);

// const timer = {
//   start() {
//     const startTIme = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       console.log('Hello');
//     }, 1000);
//   },
// };

// const promise = new Promise((res, rej) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       res('YES');
//     } else {
//       rej('NO');
//     }
//   }, 1000);
// });

// promise
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log(promise);

// const start = document.querySelector('.js-start');
// const container = document.querySelector('.js-container');

// start.addEventListener('click', onStart);

// function onStart() {
//   const promises = [...container.children].map((_, idx) => createPromise(idxb));
//   Promise.allSettled(promises).then(prom => {
//     console.log(prom);
//   });
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     const random = Math.random();

//     if (random > 0.5) {
//       res('😊');
//     } else {
//       rej('🤬');
//     }
//   }, delay * 1000);
// }

// const form = document.querySelector('.js-search');
// const BASE_URL = 'http://api.weatherapi.com/v1';
// const END_POINT_FORECAST = '/forecast.json';

// form.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   const { query, days } = e.currentTarget.elements;
//   console.log(e.target);

//   getWeather(query.value, days.value)
//     .then((data = console.log(data)))
//     .catch(err => console.log(err));
// }

// function getWeather(cityName, days) {
//   const URL = `${BASE_URL}${END_POINT_FORECAST}?key = ce2cb9b2a3da414bb5b172546231704&q=${cityName}&days=${days}&lang=uk`;
//   return fetch(URL).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });
// }

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   serachFOrm: document.querySelector('.js-form'),
// };

// refs.renderPokemonCard('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
// }

// fetchPokemon(5)
//   .then(renderPokemonCard)
//   .finally(() => form.reset());
// ///////////////////////////////////

// function fetchPokemon(pokemonId) {}
// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(resp => {
//   return resp.json();
// });

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// const BASE_URL = 'url';
// const ENDPOINT = '/character';
// const TOKEN = 'token';
// const option = {
//   method: 'GET',
//   headers: { Authorisation: `Bearer ${TOKEN}` },
// };

// const option2 = {
//     method: 'POST',
//     body: {
//         name: 'Andrii',
//         email:'a@mail.com',
//         password: '12345'
//     }
//   headers: { Authorisation: `Bearer ${TOKEN}` },
// };

// fetch(`${BASE_URL}${ENDPOINT}?limit=30&page=1`, option)
//   .then(r => {
//     if (!r.ok) {
//       throw new Error(r.statusText);
//     }

//     return r.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// const BASE_URL = 'URL';
// const ENDPOINT = 'ENPOINT';
// const API_KEY = 'APIKEY';

// function geetTrending() {
//   r

// const guard = document.querySelector(;.js-guard)
// ; const options = {
//     root: null;
//     rootMargin: 400px;
//     threshold: 0
// }
// const observer = new IntersectionObserver(onPagination, options);
//     let currentPage = 1;

//     function onPagination(entries, )
