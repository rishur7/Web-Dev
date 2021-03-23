function requestapi(){
    url="http://api.openweathermap.org/data/2.5/weather?q="+valmain+"&exclude=hourly,daily&appid=e9b4f16bc735d0ec6a7bcf499f07f6d3"
    fetch(url).then(response=> response.json())
    .then(data=> weatherInfo(data))
}
function weatherInfo(data){
    let iconcode = data.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/wn/"+iconcode+".png";
    document.getElementById('weathericon').src=iconurl;
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    document.getElementById('weatherdes').innerHTML=data.weather[0].description;
    document.getElementById('temp').innerHTML=celcius+'&deg';
    document.getElementById('cityname').innerHTML=data.name+" , "+data.sys.country;
    let windy= `${((2.23694 * data.wind.speed).toFixed(0))} km/h`
    document.getElementById('wind').innerHTML=windy;
    let hum=`${data.main.humidity}%`;
    document.getElementById('humidity').innerHTML=hum;
    document.getElementById('cloudy').innerHTML=data.weather[0].main;
    let d= new Date();
    document.getElementById('date').innerHTML=d.toDateString();
    if(data.weather[0].main=="Clear"){
        document.getElementById('bgimg').style.backgroundImage= "url('https://images.unsplash.com/photo-1549849171-09f62448709e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        document.getElementById('bgimg').style.backgroundImage= "url('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')";
    }
    else if(data.weather[0].main=="Clouds"){
        document.getElementById('bgimg').style.backgroundImage= "url('https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
    }
    else if(data.weather[0].main=="Rain"){
        document.getElementById('bgimg').style.backgroundImage= "url('https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80')"
    }
    else if(data.weather[0].main=="Snow"){
        document.getElementById('bgimg').style.backgroundImage= "url('https://images.unsplash.com/photo-1547327195-59a16bed035e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
    }
    else if(data.weather[0].main=="Haze" || "Mist" || "Smoke" || "Dust" || "Fog" || "Ash" || "Tornado"){
        document.getElementById('bgimg').style.backgroundImage= "url('https://images.unsplash.com/photo-1488342021833-581baa86e81b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
    }
    
}
var val=document.getElementById('search');
val.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        valmain=document.getElementById('search').value;
        requestapi();
    }
});
function clickfun(){
    valmain=document.getElementById('search').value;
    requestapi();
}
var valmain="Ropar";
requestapi();
console.log("Started");