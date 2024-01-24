'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

/*
const renderCountry = function (data, className = '') {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
      <h4 class="country__region">${data.region}</h4>
      <h3 class="country__name">${data.name.common}</h3>
      <p class="country__row"><span>🗣️</span>${languages[0]}</p>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} million</p>
      <p class="country__row"><span>💰</span>${currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = '1';
};

*/

///////////////////////////////////////

/*
const getCountryData = function(country) {
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener('load', function(){
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const html = `
        <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h4 class="country__region">${data.region}</h4>
            <h3 class="country__name">${data.name.common}</h3>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = '1';
})
};
getCountryData('korea');
*/

/*
const getCountryAndNeighbor = function(country) {
  // AJAX call country 1
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener('load', function(){
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  // Render country 1
  renderCountry(data);

  // Get neighbor country
  const neighbour = data.borders?.[0];
  // console.log(neighbor);
  if(!neighbour) return;

  // AJAX call country 2
  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
  request2.send();

  
  request2.addEventListener('load', function() {
    const [data2] = JSON.parse(this.responseText);
    console.log(data2);

    // Render country 2
    renderCountry(data2, 'neighbour');
  });

});
};

getCountryAndNeighbor('thailand');
// getCountryAndNeighbor('korea');
// getCountryAndNeighbor('japan');
*/

// callback hell
// setTimeout(()=>{
//   console.log(`1 sec passed`);
//   setTimeout(()=>{
//     console.log(`2 sec passed`);
//     setTimeout(()=>{
//       console.log(`3 sec passed`);
//       setTimeout(()=>{
//         console.log(`4 sec passed`);
//       },1000);
//     },1000);
//   },1000);
// },1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountriescom/v3.1/name/${country}`);
// request.send()

// const request = fetch('https://restcountries.com/v3.1/name/korea');
// console.log(request);

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//     console.log(response);
//     return response.json();
//   }).then(function(data) {
//     console.log(data);
//     renderCountry(data[0]);
//   });
// };

// const getJson = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

//     return response.json();
//   });
// };

/*
// better way
const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response =>{
      console.log(response);

      if(!response.ok)
      throw new Error(`country not found ${response.status}`)

      return response.json()})
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders?.[0];
      const neighbour = 'xxx';
      if (!neighbour) return;
      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response =>{
      if(!response.ok)
      throw new Error(`country not found ${response.status}`)

       return response.json()})
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err =>{
       console.error(`${err} !!!!!!`);
       renderError(`something went wrong!!!!! ${err.message}. try again...`)
      })
      .finally(() => {
        countriesContainer.style.opacity = '1';
      })
};
*/

/*
// better way
const getCountryData = function (country) {
  // country 1
  getJson(`https://restcountries.com/v3.1/name/${country}`,'country not found')
  .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`No neighbour found!`);

      // country 2
      return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`,'country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err =>{
       console.error(`${err} !!!!!!`);
       renderError(`something went wrong!!!!! ${err.message}. try again...`)
      })
      .finally(() => {
        countriesContainer.style.opacity = '1';
      })
};

btn.addEventListener('click', function() {
  getCountryData('japan');
})

// getCountryData('xxx');`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
*/
//....................... coding challange

/*
const whereAmI = function(lat,lng){
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth="30862233227125153093x52152"`)
  .then(res =>{
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
    return res.json()})
  .then(data =>{
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}.`);

    return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
  })
  .then(res =>{
    if(!res.ok)
    throw new Error(`country not found ${res.status}`)

     return res.json()})
  .then(data => renderCountry(data[0]))
  .catch(err => console.error(`${err.message}!!!!!!!!!!!!!!!!!!!`))
}
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

*/

//...............................

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'),0);
// Promise.resolve(`Resolved promise 1`).then(res => console.log(res));

// Promise.resolve(`Resolved promise 2`).then(res =>{
//   for(let i=0; i<1000000000; i++){}
//   console.log(res)});

// console.log('Test End');

/*
const lotteryPromise = new Promise(function(resolve, reject) {

  console.log('Lottery draw is happening!');
  setTimeout(()=>{
    if(Math.random() >= 0.5) {
      resolve(`you win!`);
    } else {
      reject(new Error(`You lost !!!`));
    }
  },2000)

})

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout

const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
};

wait(1).then(()=>{
  console.log(`I waited for 1 seconds`);
  return wait(1)
  .then(()=>{
    console.log(`I waited for 2 seconds`);
    return wait(1)
  })
  .then(()=>{
    console.log(`I waited for 3 seconds`);
    return wait(1)
  })
}).then(()=>console.log(`I waited for 4 second`))
*/

// Promise.resolve('abc').then(x=>console.log(x));
// Promise.reject(new Error('Problem!')).catch(x=>console.error(x));

/*
const getPosition = function() {
  return new Promise(function(resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve,reject);
  })
}

// getPosition().then(pos=>console.log(pos));

const whereAmI = function(){
  getPosition().then(pos => {
    let { latitude : lat,  longitude : lng} = pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth="30862233227125153093x52152"`)
  })
  .then(res =>{
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
    return res.json()})
  .then(data =>{
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}.`);

    return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
  })
  .then(res =>{
    if(!res.ok)
    throw new Error(`country not found ${res.status}`)

     return res.json()})
  .then(data => renderCountry(data[0]))
  .catch(err => console.error(`${err.message}!!!!!!!!!!!!!!!!!!!`))
}

btn.addEventListener('click', whereAmI);
*/

//........................coding challenge
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error(`Image not found`));
    });
  });
};

let currenImg;
createImage('img/img-1.jpg')
  .then(img => {
    currenImg = img;
    console.log(`Image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currenImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currenImg = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    currenImg.style.display = 'none';
  })
  .catch(err => console.error(err));

*/
//...........................................

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    let { latitude: lat, longitude: lng } = pos.coords;

    // Reverse grocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth="30862233227125153093x52152"`
    );

    if (!resGeo.ok) throw new Error(`Problem getting location data`);

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem getting country`);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`{err}!!!!`);
    renderError(`!!!!!!!!!! ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};
*/

// console.log(`1: Will get location`);
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}!!!!!`))
//   .finally(() => console.log('3: finished getting location'));

// ANOTHER better way
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`)
//   } catch (err) {
//     console.error(`2: ${err.message}!!!!!`)
//   }
//   console.log('3: finished getting location');
// })();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.log(err.message);
// }

/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`)
    // const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`)
    // const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`)
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Better way
    const data = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('bhutan', 'bharat', 'nepal');
*/

/*
// Promise.race
(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/italy`),
    getJson(`https://restcountries.com/v3.1/name/egypt`),
    getJson(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0].name);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};

Promise.race([
  getJson(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0].name))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Promise.all
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error!!!!!!!!!!!'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res))
.catch(err => console.error(err));

// Promise.any
Promise.any([
  Promise.resolve('Success#####'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res))
.catch(err => console.error(err));
*/

//.................coding chellange...............
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error(`Image not found`));
    });
  });
};

let currenImg;*/
// createImage('img/img-1.jpg')
//   .then(img => {
//     currenImg = img;
//     console.log(`Image 1 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currenImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currenImg = img;
//     console.log(`Image 2 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currenImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/*
const loadNpause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';

    // Load image 1
    img = await createImage('img/img-2.jpg');
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = 'none';

  } catch (err) {
    console.error(err);
  }
};

// loadNpause();

const loadAll = async function(imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'))
  } catch (err) {
    console.error(err);
  }
}

loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg'])
*/

//...................................
//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);
    // console.log(languages,currencies[0].name);
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${languages[0]}</p>
      <p class="country__row"><span>💰</span>${currencies[0].name}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
  });
};
getCountryData('bangladesh');
// getCountryData('austria');
*/

// const renderCountry = function (data, className = '') {
//   const languages = Object.values(data.languages);
//   const currencies = Object.values(data.currencies);
//   // console.log(languages,currencies[0].name);
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//     <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getNeighborCountryData = function (country) {
// Ajax Call Country 1
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function () {
// console.log(this.responseText);
// const [data] = JSON.parse(this.responseText);
// console.log(data);

// Render Country 1
// renderCountry(data);

// Neighbor Country
// const neighbor = data.borders?.[0];
// console.log(neighbor);

// if (!neighbor) return;

// Ajax Call Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getNeighborCountryData('bangladesh');
// getNeighborCountryData('usa');

// ......this is callback hell
// setTimeout(() => {
//   console.log(`1 sec passed`);
//   setTimeout(()=>{
//     console.log(`2 sec passed`);
//     setTimeout(()=>{
//       console.log(`3 sec passed`);
//       setTimeout(()=>{
//         console.log(`4 sec passed`);
//       },1000);
//     },1000);
//   },1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/bangladesh`);
// console.log(request);

/*
const getJson = function (url, errorMsg = 'Something wrong') {
  return fetch(`${url}`).then(response => {
    // console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}.`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJson(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found!!'
  )
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
      // Neighbour country
      const neighbour = data[0].borders?.[0];
      console.log(neighbour);
      if (!neighbour) throw new Error('No neighbour found');
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found!!'
      );
    })
    .then(data2 => {
      console.log(data2);
      renderCountry(data2[0], 'neighbour');
    })
    .catch(error => {
      console.log(`${error}🧨🧨🧨`);
      renderError(`something wrong! ${error.message}🧨🧨🧨.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('bangladesh');
});
getCountryData('australia');
*/

/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth="30862233227125153093x52152"`
  )
    .then(response => {
      // console.log(response);
      if (!response.ok) throw new Error(`Something wrong!! ${response.status}`);
      return response.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`You are in ${data.city},${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(res => {
      if (!res.ok) throw new Error(`Something wrong!! ${res.status}`);
      return res.json();
    })
    .then(data2 => {
      console.log(data2);
      renderCountry(data2[0]);
    })
    .catch(error => {
      console.error(`${error.message}🧨🧨🧨`);
    });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/
// console.log(`test start`);
// setTimeout(()=>{console.log(`after 0 sec`);},0);
// Promise.resolve(`promised resolved 1`).then(response=>console.log(response));
// Promise.resolve(`promised resolved 2`).then(response=>{
//   for(let i=0;i<10000000000;i++){}
//   console.log(response)});
// console.log(`test end`);

// const lotteryPromise = new Promise(function(resolve,reject){
//   console.log(`Lottery draw is happening`);
//   setTimeout(()=>{
//     if(Math.random() >= 0.5){
//       resolve(`YOU WIN!!!`);
//     } else {
//       reject(new Error(`YOU LOSE!!!`));
//     }
//   },2000)
// });
// lotteryPromise.then(res=>console.log(res)).catch(error=>console.error(error));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`i waited 1 sec`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited 2 secs`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`i waited 3 secs`);
//     return wait(1);
//   })
//   .then(() => console.log(`i waited 4 secs`));

// Promise.resolve('fullfill').then(x=>console.log(x));
// Promise.reject(new Error('Error')).catch(x=>console.error(x));
// navigator.geolocation.getCurrentPosition(success=>console.log(success),err=>console.error(err));

// const getPosition = function(){
//   return new Promise(function(res,rej){
// navigator.geolocation.getCurrentPosition(success=>res(success),err=>rej(err));
//     navigator.geolocation.getCurrentPosition(res,rej);
//   })
// }

// getPosition().then(s=>console.log(s)).catch(e=>console.error(e));

// const whereAmI = function () {
//   getPosition().then(pos=>{
//     const {latitude : lat,longitude:lng} = pos.coords;
//     return fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth="30862233227125153093x52152"`
//     )
//   }).then(response => {

//       if (!response.ok) throw new Error(`Something wrong!! ${response.status}`);
//       return response.json();
//     })
//     .then(data => {

//       console.log(`You are in ${data.city},${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Something wrong!! ${res.status}`);
//       return res.json();
//     })
//     .then(data2 => {
//       renderCountry(data2[0]);
//     })
//     .catch(error => {
//       console.error(`${error.message}🧨🧨🧨`);
//     });
// };

// btn.addEventListener('click',whereAmI);

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error(`Image not found.`));
//     });
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(x => {
//     currentImg = x;
//     console.log(`img-1 loaded.`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(x => {
//     currentImg = x;
//     console.log(`img-2 loaded.`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(x => {
//     currentImg = x;
//     console.log(`img-3 loaded.`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const renderCountry = function (data, className = '') {
  // console.log(data);
  // const languages = Object.values(data.languages);
  // const currencies = Object.values(data.currencies);
  // console.log(languages,currencies[0].name);
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//     <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getPosition = function () {
//   return new Promise(function (res, rej) {
//     navigator.geolocation.getCurrentPosition(res, rej);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse Geocoding
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth="30862233227125153093x52152"`
//     );
//     if (!resGeo.ok) throw new Error(`Problem getting data`);
//     const dataGeo = await resGeo.json();
//     // console.log(dataGeo);

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error(`Problem getting country`);
//     // console.log(res);
//     const data = await res.json();
//     // console.log(data[0]);
//     renderCountry(data[0]);
//     return `You are in ${data[0].capital},${data[0].name.common}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`!!!${err.message}`);

//     throw err;
//   }
// };
// console.log(`First`);
// const x = whereAmI();
// console.log(x);
// whereAmI().then((city)=>console.log(city)).catch(err=>console.error(`${err.message}🧨🧨🧨`)).finally(()=>console.log(`third`));

// Modern way
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.error(`${err.message}🧨🧨🧨`);
//   }
//   console.log(`third`);
// })();

// console.log(`yohohoho`);

// try {
//   let a = 4;
//   const x = 5;
//   x = 9;
// } catch(err){alert(err.message)}

// const getJson = function (url, errorMsg = 'Something wrong') {
//   return fetch(`${url}`).then(response => {
//     // console.log(response);
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}.`);
//     return response.json();
//   });
// };

// const get3Countries = async function(c1,c2,c3){
//   try{
// const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
// const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
// const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);
// console.log([data1.capital,data2.capital,data3.capital]);

//     const data = await Promise.all([getJson(`https://restcountries.com/v3.1/name/${c1}`),getJson(`https://restcountries.com/v3.1/name/${c2}`),getJson(`https://restcountries.com/v3.1/name/${c3}`)]);
//     console.log(data.map(x=>x[0].capital));

//   } catch(err){
//     console.error(err);
//   }
// }
// get3Countries('japan','South korea','russia');

// (async function () {
//   const x = await Promise.race([
//     getJson(`https://restcountries.com/v3.1/name/italy`),
//     getJson(`https://restcountries.com/v3.1/name/brazil`),
//     getJson(`https://restcountries.com/v3.1/name/vietnam`),
//   ]);
//   console.log(x[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error('something is wrong'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJson(`https://restcountries.com/v3.1/name/italy`), timeout(1)])
//   .then(res => console.log(res[0].name.common))
//   .catch(err => console.error(err));

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ]).then(x => console.log(x));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ]).then(x => console.log(x)).catch(err => console.error(err));

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ]).then(x => console.log(x)).catch(err => console.error(err));

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error(`Image not found.`));
//     });
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const loadNPause = async function(){
//   try {
//     // img1
//     let x = await createImage('img/img-1.jpg');
//     console.log(`img-1 loaded.`);
//     await wait(2);
//     x.style.display = 'none';

//     // img2
//     x = await createImage('img/img-2.jpg');
//     console.log(`img-2 loaded.`);
//     await wait(2);
//     x.style.display = 'none';

//     // img3
//     x = await createImage('img/img-3.jpg');
//     console.log(`img-3 loaded.`);
//     await wait(2);
//     x.style.display = 'none';
//   } catch(x) {
//     console.error(x.message);
//   }
// }

// loadNPause();

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async x => await createImage(x));
//     console.log(imgs);
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//     for(let el of imgsEl){
//       el.classList.add('parallel');
//     }
  
//   } catch (x) {
//     console.error(x);
//   }
// };
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

/////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////

// async function pokemon_data(pokemon) {
//   let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//   let data = await response.json().then(data=>
//     {console.log(data);
//     console.log(data.sprites.front_shiny)});
//   return data;
// }
// pokemon_data("ho-oh");
