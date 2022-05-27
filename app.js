removeClass = ( ) => document.querySelector('.weather').classList.remove('loading');
weatherStatusAdd = ( ) => {
    weather(`${document.querySelector('input').value}`);
        document.querySelector('input').value = "";
};
weather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eaad4ad01a86844007802da17164bae0&units=metric`)
    .then((response)=>response.json())
    .then((data)=>weatherInfo(data))
    .catch(()=>{
        if(document.querySelector('input').value == ""){
            removeClass();
            document.querySelector('.weather').classList.add('error')
        }
    })
}
weatherInfo = (data) => {
    document.querySelector('.city').innerHTML = `Weather in ${data.name}`;
    document.querySelector('.temp').innerHTML = `${data.main.temp} °C`;
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">`;
    document.querySelector('.description').innerHTML = `${data.weather[0].description}`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
    document.querySelector('.speed').innerHTML = `Wind speed; ${data.wind.speed} km/h`;
    document.querySelector('section').style.backgroundImage = `url(https://source.unsplash.com/random/1920x1080/?${data.name})`;
    document.querySelector('.weather').classList.remove('error');
}

const search = document.querySelector('.search-icon');
search.addEventListener('click',()=>{
    weatherStatusAdd()
   
})
document.querySelector('input').addEventListener('keyup',(e)=>{
    if(e.code == 'Enter'){
    weatherStatusAdd()
    }
})