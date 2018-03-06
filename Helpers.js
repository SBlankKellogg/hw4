export const geocodeAndGetWeather = async (address) => {
  const googleMapsUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address) + "&key=AIzaSyBkJMD1_etDjCXpjESOcixlKT1_U0QfYh4";
  const googleMapsResponse = await fetch(googleMapsUrl);
  const googleMapsJson = await googleMapsResponse.json();
  const location = googleMapsJson.results[0].formatted_address;
  const lat = googleMapsJson.results[0].geometry.location.lat;
  const lng = googleMapsJson.results[0].geometry.location.lng;
  const darkSkyUrl = "https://api.darksky.net/forecast/52dd0a0afe6b85172771658ff9fb4b3a/" + lat + "," + lng + "?callback=?";
  const darkSkyResponse = await fetch(darkSkyUrl);
  const darkSkyText = await darkSkyResponse.text();
  const weather = eval(darkSkyText.replace("/**/ typeof  === 'function' && ", ""));
  return { location: location, 
           weather:  weather};
};

export const icon = function(iconName) {
  switch(iconName) {
    case "clear-day":
    case "clear-night":
      return "sun-o";
      break;
    case "rain":
      return "tint";
      break;
    case "wind":
      return "bars";
      break;
    case "snow":
    case "sleet":
      return "snowflake-o";
      break;
    default:
      return "cloud";
      break;
  }
};