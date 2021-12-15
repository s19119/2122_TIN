const temperatureModule = require('./temperature.js');
const distanceModule = require('./distance.js');

const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton){
        return;
    }
    else{
        if(event.target.id == "buttonTemp"){
            convertTemperature();
        }
        else if(event.target.id == "buttonDistance"){
            convertDistance();
        }
    }
});

function convertTemperature(){
    const origin = document.getElementById("originTemp").value;
    const target = document.getElementById("targetTemp").value;
    let temp = parseFloat(document.getElementById("temperature").value);
    if(origin != target){
        switch(origin){
            case "celsius" :{
                switch(target){
                    case "fahrenheit" :
                        temp = temperatureModule.convertCelsiusToFahrenheit(temp);
                        break;
                    case "kelvin" :
                        temp = temperatureModule.convertCelsiusToKelvin(temp);
                        break;
                }
                break;
            }
           case "fahrenheit" : {
               switch(target){
                   case "celsius" :
                       temp = temperatureModule.convertFahrenheitToCelsius(temp);
                       break;
                    case "kelvin" :
                        temp = temperatureModule.convertFahrenheitToKelvin(temp);
                        break;
               }
               break;
           } 
           case "kelvin" : {
               switch(target){
                   case "celsius" :
                       temp = temperatureModule.convertKelvinToCelsius(temp);
                       break;
                    case "fahrenheit" :
                        temp = temperatureModule.convertKelvinToFahrenheit(temp);
                        break;
               }
               break;
           }    
        }
    }    
    document.getElementById("resultTemp").innerHTML = temp + ' ' + target;
}

function convertDistance(){
    const origin = document.getElementById("originDistance").value;
    const target = document.getElementById("targetDistance").value;
    let distance = parseFloat(document.getElementById("distance").value);
    if(origin != target){
        switch(origin){
            case "kilometres" :
                distance = distanceModule.convertKilometresToMiles(distance);
                break;
            case "miles" :
                distance = distanceModule.convertMilesToKilometres(distance);
                break;
        }
    }
    document.getElementById("resultDistance").innerHTML = distance + ' ' + target;
}