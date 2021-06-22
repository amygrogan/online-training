class Weather {
    constructor(city, state) {
        this.apiKey = '9f8054d605ab520eb68b02c515d2070d';
        this.city = city;
        this.state = state;
    }

    // fetch weather from api
    async getWeather() {
        const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}`);

        const responseData = await response.json();
        
        // console.log(responseData); 
        return responseData;

    }

    // change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}