exports.convertCelsiusToKelvin = (temperature) => (temperature+273.15);

exports.convertKelvinToCelsius = (temperature) => (temperature-273.15);

exports.convertCelsiusToFahrenheit = (temperature) => (temperature*1.8+32).toFixed(2);

exports.convertFahrenheitToCelsius = (temperature) => ((temperature-32)/1.8).toFixed(2);

exports.convertFahrenheitToKelvin = (temperature) => (((temperature-32)/1.8)+273.15).toFixed(2);

exports.convertKelvinToFahrenheit = (temperature) => (((temperature-273.15)*1.8)+32).toFixed(2);