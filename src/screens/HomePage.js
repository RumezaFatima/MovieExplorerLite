import {StyleSheet, Text, View} from 'react-native';
import Movie from '../api/GetMovie';

// This file has the code for the HomePage

export default function HomePage() {
  return <Movie></Movie>;
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  animation: {height: 300, aspectRatio: 1},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  subTitle: {fontSize: 16, marginBottom: 10},
});
