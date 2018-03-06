// KIEI-924 Spring 2018 Homework #4
// React Native Weather

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { geocodeAndGetWeather, icon } from './Helpers';
import styles from './styles';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locationInputText: "",  // the value of the text input
      locationName: "",       // the name of the location (e.g. "Chicago, IL, USA")
      currentTemperature: "", // the current temperature (e.g. 50.85)
      currentSummary: "",     // the current weather summary (e.g. "Clear throughout the day")
      currentIcon: "",        // the Font Awesome string of the current icon (e.g. "sun-o")
      forecast: []            // an array holding information on the forecast
    };
  }

  textInputChanged(text) {
    this.setState({
      locationInputText: text
    });
  }

  async getWeather() {
    const response = await geocodeAndGetWeather(this.state.locationInputText);

    console.log(response.location);
    console.log(response.weather);

    // manipulate state

    this.setState({
      locationName: response.location,
      currentTemperature: Math.round(response.weather.currently.temperature),
      currentIcon: response.weather.currently.icon,
      currentSummary: response.weather.currently.summary,
      forecast: response.weather.daily.data
    });
  }

  render() {

    let forecast = []; // this will eventually hold the JSX elements for each day
    for (let i=0; i<5; i++) {
      let forecastDay=i;
      let forecastIcon = <Text style={styles.forecastIcon}>{this.state.forecast[i] &&
        (<Icon size={35} name={icon(this.state.forecast[i].icon)} />)}</Text>
        let forecastTemperature=<Text>{this.state.forecast[i] &&
          (<Text style={styles.forecastTemperature}>{Math.round(this.state.forecast[i].temperatureHigh)}</Text>)}</Text>
          forecast.push(<View style={styles.forecastDay} key={i}>
            {forecastIcon}{forecastTemperature}</View>)
          }
          
          return (
            <View style={styles.container}>
            <View>
            <TextInput style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.textInputChanged(text)} />
            <Button onPress={() => this.getWeather()} title="Get the weather!" />
            </View>
            <View style={styles.currentWeather}>
            {/* Current weather conditions */}

            <Text style={styles.currentIcon}>{this.state.currentIcon &&
              (<Icon name={icon(this.state.currentIcon)} size={90} />)}</Text>
              <Text style={styles.locationText}>
              {this.state.locationName}</Text>
              <Text style={styles.currentTemperature}>
              {this.state.currentTemperature}</Text>
              <Text style={styles.currentSummary}>
              {this.state.currentSummary}</Text>

              </View>
              <View style={styles.forecast}>
              {forecast}
              </View>
              </View>
            );
          }
        }
