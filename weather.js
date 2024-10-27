async function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'eea7e765601f09cfae88cfbd0414a413'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        const date = new Date();

        document.getElementById('weatherResult').innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}</p>
        `;
    } catch (error) {
        document.getElementById('weatherResult').textContent = error.message;
    }
}

