let temph1 = document.querySelector(".temph1");
let city = document.querySelector(".city");
let time = document.querySelector(".time");
let descriptionDiv = document.querySelector(".descriptionDiv")
let img = document.querySelector(".iconimg")
let descriptP = document.querySelector(".descriptP");


let visibility = document.querySelector(".VisibilityP");
let humidity = document.querySelector(".HumidityP");
let wind = document.querySelector(".WindP");
let pressure = document.querySelector(".PressureP")

let key = 'f54c305213296de227c8786a5bcf81cd'

let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.4226048&lon=49.8991104&appid=f54c305213296de227c8786a5bcf81cd`);


weather.then(res => {
    return res.json()
}).then(post => {
    console.log(post);
    let tarix = new Date(post.dt);
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    temph1.innerHTML = `${Math.round(post.main.temp - 273.15)}&deg`;
    city.innerHTML = `${post.name.replace(" City", "")}`;
    time.innerHTML = `${tarix.toGMTString()}`;
    img.src = `http://openweathermap.org/img/wn/${post.weather[0].icon}@2x.png`
    descriptP.innerHTML = `${post.weather[0].main}`;

    visibility.innerHTML = `${post.visibility/ 1000}km`
    wind.innerHTML = `${post.wind.speed}m/s`;
    humidity.innerHTML = `${post.main.humidity}%`
    pressure.innerHTML = `${post.main.pressure}hPa`
    // console.log(post.main.humidity);
});