

function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var conversionType = document.querySelector('input[name="conversion"]:checked');
    var result = document.getElementById("result");

    // Check if input value is empty
    if (isNaN(inputValue)) {
        result.value = "Please enter value above.";
        return;
    }

    // Check if a conversion type is selected
    if (!conversionType) {
        result.value = "Please select conversion";
        return;
    }


    switch (conversionType.value) {
        case "metersToFeet":
            result.value = inputValue * 3.28084;
            break;
        case "feetToMeters":
            result.value = inputValue / 3.28084;
            break;
        case "kilometersToMiles":
            result.value = inputValue * 0.621371;
            break;
        case "milesToKilometers":
            result.value = inputValue / 0.621371;
            break;
        case "celsiusToFahrenheit":
            result.value = (inputValue * 9/5) + 32;
            break;
        case "fahrenheitToCelsius":
            result.value = (inputValue - 32) * 5/9;
            break;
        case "kilogramToPounds":
            result.value = inputValue * 2.20462;
            break;
        case "poundsToKilogram":
            result.value = inputValue / 2.20462;
            break;
        case "gramsToOunces":
            result.value = inputValue * 0.03527396;
            break;
        case "ouncesToGrams":
            result.value = inputValue / 0.03527396;
            break;
        default:
            result.value = "Invalid conversion";
    }
}
