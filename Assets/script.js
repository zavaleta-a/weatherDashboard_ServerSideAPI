// creating a variable to save API Key for future use
var APIKey = "a4594417e70fc201979b8f330a80381f"

// creating a variable for the city we want the weather for
var city; 

// creating queryURL for API call
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +city + "&appid=" + APIKey;