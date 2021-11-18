// eslint-disable-next-line no-unused-vars
function convertToFahrenheit(){
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius*1.8 +32).toFixed(2);
    document.getElementById("fahrenheit").innerHTML = 'Result in Fahrenheit:  ' + fahrenheit;
}