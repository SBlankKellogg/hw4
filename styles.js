import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputBox: {
    width: 300, 
    height: 40, 
    borderBottomWidth: 1, 
    marginBottom: 20,
    padding: 5,
    textAlign: 'center'
  },
  locationText: {
    fontSize: 24
  },
  currentWeather: {
    alignItems: 'center'
  },
  currentIcon: {
    marginBottom: 20
  },
  currentTemperature: {
    fontSize: 50
  },
  currentSummary: {
    fontSize: 16
  },
  forecast: {
    flexDirection: 'row'
  },
  forecastDay: {
    margin: 10,
    alignItems: 'center'
  },
  forecastIcon: {
    marginBottom: 20
  },
  forecastTemperature: {
    fontSize: 30
  },
  forecastSummary: {
    fontSize: 12
  }
});

export default styles; 
