import React, { Component } from 'react';
import {
  Image,              // Renders images
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  View,               // Container component
} from 'react-native';

export default class Callout extends Component {
  render() {
    const { distance, duration } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View>
            <Text style={styles.distance}>Distance : {distance}</Text>
            <Text style={styles.duration}>Duration : {duration}</Text>
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  // Callout bubble
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  // distance
  distance: {
    fontSize: 16,
    marginBottom: 5,
  },
  // duration
  duration: {
    fontSize: 16,
    marginBottom: 5,
  },
  //  image
  image: {
    width: 120,
    height: 80,
  },
});