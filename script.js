
// document.addEventListener('DOMContentLoaded', function () {
//     const searchButton = document.querySelector('.search-box button');
//     const container = document.querySelector('.container');
//     const weatherBox = document.querySelector('.weather-box');
//     const weatherDetails = document.querySelector('.weather-details');
//     const notFound = document.querySelector('.not-found');
//     const cityHide = document.querySelector('.city-hide');

//     function handleWeather() {
//         const APIkey = 'a8b168f8b75b1bf06e50994534562bf3';
//         const cityInput = document.querySelector('.search-box input');
//         const cityName = cityInput.value;

//         if (cityName === '') {
//             return;
//         }

//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === '404') {
//                     handleNotFound(cityName);
//                 } else {
//                     handleWeatherData(data);
//                     displayCityName(cityName);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching weather data:', error);
//             });
//     }

//     function handleNotFound(cityName) {
//         container.style.height = '400px';
//         weatherBox.classList.remove('active');
//         weatherDetails.classList.remove('active');
//         notFound.classList.add('active');
//         cityHide.innerHTML = `City: ${cityName}`;
//         cityHide.classList.add('active');
//     }

//     function handleWeatherData(data) {
//         container.style.height = '555px';
//         weatherBox.classList.add('active');
//         weatherDetails.classList.add('active');
//         notFound.classList.remove('active');

//         const image = document.querySelector('.weather-box img');
//         const temperature = document.querySelector('.temprature');
//         const description = document.querySelector('.description');
//         const humidity = document.querySelector('.info-humidity span');
//         const wind = document.querySelector('.info-wind span');

//         switch (data.weather[0].main) {
//             case 'Clear':
//                 image.src = 'img/clear.png';
//                 break;

//             case 'Rain':
//                 image.src = 'img/rain.png';
//                 break;

//             case 'Snow':
//                 image.src = 'img/snow.png';
//                 break;

//             case 'Clouds':
//                 image.src = 'img/cloud.png';
//                 break;

//             case 'Mist':
//                 image.src = 'img/mist.png';
//                 break;

//             case 'Haze':
//                 image.src = 'img/cloud.png';
//                 break;

//             default:
//                 image.src = 'img/cloud2.png';
//         }

//         temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
//         description.innerHTML = `${data.weather[0].description}`;
//         humidity.innerHTML = `${data.main.humidity}%`;
//         wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
//     }
//     // Reset city-hide when initiating a new search
// function resetCityHide() {
//     cityHide.innerHTML = '';
//     cityHide.classList.remove('active');
// }

//     function displayCityName(cityName) {
//         cityHide.innerHTML = `City: ${cityName}`;
//         cityHide.classList.add('active');
//     }

//     searchButton.addEventListener('click', handleWeather);
//     resetCityHide();
//     handleWeather();
//     // Handle Enter key press
//     document.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             resetCityHide();
//             handleWeather();
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-box button');
    const container = document.querySelector('.container');
    const weatherBox = document.querySelector('.weather-box');
    const weatherDetails = document.querySelector('.weather-details');
    const notFound = document.querySelector('.not-found');
    const cityHide = document.querySelector('.city-hide');

    function handleWeather() {
        const APIkey = 'a8b168f8b75b1bf06e50994534562bf3';
        const cityInput = document.querySelector('.search-box input');
        const cityName = cityInput.value;

        if (cityName === '') {
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    handleNotFound(cityName);
                } else {
                    handleWeatherData(data);
                    displayCityName(cityName);
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    function handleNotFound(cityName) {
        container.style.height = '400px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        notFound.classList.add('active');
        cityHide.innerHTML = `City: ${cityName}`;
        cityHide.classList.add('active');
    }

    function handleWeatherData(data) {
        container.style.height = '555px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        notFound.classList.remove('active');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.temprature');
        const description = document.querySelector('.description');
        const humidity = document.querySelector('.info-humidity span');
        const wind = document.querySelector('.info-wind span');

        switch (data.weather[0].main) {
            case 'Clear':
                image.src = 'img/clear.png';
                break;

            case 'Rain':
                image.src = 'img/rain.png';
                break;

            case 'Snow':
                image.src = 'img/snow.png';
                break;

            case 'Clouds':
                image.src = 'img/cloud.png';
                break;

            case 'Mist':
                image.src = 'img/mist.png';
                break;

            case 'Haze':
                image.src = 'img/cloud.png';
                break;

            default:
                image.src = 'img/cloud2.png';
        }

        temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

        // Apply transition to humidity and wind speed logos
        applyLogoTransition();
    }

    function displayCityName(cityName) {
        cityHide.innerHTML = `City: ${cityName}`;
    }

    // Reset city-hide when initiating a new search
    function resetCityHide() {
        cityHide.innerHTML = '';
        cityHide.classList.remove('active');
    }

    function applyLogoTransition() {
        const logos = document.querySelectorAll('.weather-details i');
        logos.forEach(logo => {
            logo.style.transition = 'opacity 0.5s ease-in-out';
            logo.style.opacity = '1';
        });
    }

    searchButton.addEventListener('click', function () {
        resetCityHide();
        handleWeather();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            resetCityHide();
            handleWeather();
        }
    });
});
