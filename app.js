async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'cfbe831c4d4e073f78fe9e59518c5e0e';  // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('weather-data').innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-data').innerHTML = `
                <p>City not found. Please try again.</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
