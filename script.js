document.addEventListener("DOMContentLoaded", () => {
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    const daytime = document.getElementById('daytime');
    const time = document.getElementById('time');
    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');

    const apiKey = '30d4741c779ba94c470ca1f63045390a'; 

    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const temp = data.main.temp;
                    const weatherCondition = data.weather[0].main.toLowerCase();
                    const currentHour = new Date().getHours();
                    const currentTime = new Date().toLocaleTimeString();

                    // Set temperature
                    temperature.textContent = `Temperature: ${temp}°C`;

                    // Reset previous animation classes and body background
                    weatherIcon.className = '';
                    document.body.className = '';

                    // Set condition, icon, and background
                    switch (weatherCondition) {
                        case 'clear':
                            weatherIcon.textContent = '☀️';
                            condition.textContent = 'Condition: Sunny';
                            weatherIcon.classList.add('sunny-icon');
                            document.body.classList.add('sunny-bg');
                            break;
                        case 'clouds':
                            weatherIcon.textContent = '☁️';
                            condition.textContent = 'Condition: Cloudy';
                            weatherIcon.classList.add('cloudy-icon');
                            document.body.classList.add('cloudy-bg');
                            break;
                        case 'rain':
                        case 'drizzle':
                            weatherIcon.textContent = '🌧️';
                            condition.textContent = 'Condition: Rainy';
                            weatherIcon.classList.add('rainy-icon');
                            document.body.classList.add('rainy-bg');
                            break;
                        case 'snow':
                            weatherIcon.textContent = '❄️';
                            condition.textContent = 'Condition: Snowy';
                            weatherIcon.classList.add('snowy-icon');
                            document.body.classList.add('snowy-bg');
                            break;
                        case 'mist':
                            weatherIcon.textContent = '🌫️';
                            condition.textContent = 'Condition: Misty';
                            weatherIcon.classList.add('misty-icon');
                            document.body.classList.add('misty-bg');
                            break;
                        case 'fog':
                            weatherIcon.textContent = '🌁';
                            condition.textContent = 'Condition: Foggy';
                            weatherIcon.classList.add('fog-icon');
                            document.body.classList.add('fog-bg');
                            break;
                        case 'thunderstorm':
                            weatherIcon.textContent = '⚡';
                            condition.textContent = 'Condition: Thunderstorm';
                            weatherIcon.classList.add('thunderstorm-icon');
                            document.body.classList.add('thunderstorm-bg');
                            break;
                            case 'haze':
                                weatherIcon.textContent = '🌫️';
                                condition.textContent = 'Condition: Hazy';
                                weatherIcon.classList.add('haze-icon');
                                document.body.classList.add('haze-bg');
                                break;
                            case 'dust':
                                weatherIcon.textContent = '🌪️';
                                condition.textContent = 'Condition: Dusty';
                                weatherIcon.classList.add('dust-icon');
                                document.body.classList.add('dust-bg');
                                break;
                            case 'sand':
                                weatherIcon.textContent = '🏜️';
                                condition.textContent = 'Condition: Sandy';
                                weatherIcon.classList.add('sand-icon');
                                document.body.classList.add('sand-bg');
                                break;
                            case 'squall':
                                weatherIcon.textContent = '🌬️';
                                condition.textContent = 'Condition: Squall';
                                weatherIcon.classList.add('squall-icon');
                                document.body.classList.add('squall-bg');
                                break;
                            case 'tornado':
                                weatherIcon.textContent = '🌪️';
                                condition.textContent = 'Condition: Tornado';
                                weatherIcon.classList.add('tornado-icon');
                                document.body.classList.add('tornado-bg');
                                break;
                            default:
                                weatherIcon.textContent = '❓';
                                condition.textContent = 'Condition: Unknown';
                                break;
                        }
    
                        // Set day or night
                        if (currentHour >= 6 && currentHour < 18) {
                            daytime.textContent = 'Daytime: Day';
                        } else {
                            daytime.textContent = 'Daytime: Night';
                        }
    
                        // Set current time
                        time.textContent = `Time: ${currentTime}`;
                    } else {
                        alert('City not found. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alert('An error occurred while fetching weather data. Please try again later.');
                });
        }
    
        searchBtn.addEventListener('click', () => {
            const city = cityInput.value.trim();
            if (city) {
                fetchWeather(city);
            } else {
                alert('Please enter a city name.');
            }
        });
    });
    
