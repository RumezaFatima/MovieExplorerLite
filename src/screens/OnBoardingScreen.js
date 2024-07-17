import LottieView from 'lottie-react-native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// This file is the code for the onboarding screen

function OnBoardingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieView
          source={require('../assets/MovieAnimation.json')}
          autoPlay
          loop
        />
      </View>
      <View>
        <Text style={styles.title}>Dive into Movie Explorer Lite!</Text>
      </View>
      <Text style={styles.subTitle}>Browse movies easily.</Text>
      <Button title="Lets Go!" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  animation: {height: 300, aspectRatio: 1},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  subTitle: {fontSize: 16, marginBottom: 10},
});

export default OnBoardingScreen;
