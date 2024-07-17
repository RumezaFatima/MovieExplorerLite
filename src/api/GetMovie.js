import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd10067ebaf0e60224c4e6b95d5fa9771';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const getMovies = () => {
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  const searchMovies = query => {
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(json => setSearchResults(json.results[0]));
  };

  const getMovieDetails = movieId => {
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setSearchResults(json));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = () => {
    searchMovies(searchQuery);
  };

  const handleTitlePress = () => {
    setSearchResults(null);
    setSearchQuery('');
  };

  const handleMoviePress = movieId => {
    getMovieDetails(movieId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleTitlePress}>
        <Text style={styles.title}>Movie Explorer Lite</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      {searchResults ? (
        <View style={styles.movieDetailsContainer}>
          <Image
            style={styles.moviePoster}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${searchResults.poster_path}`,
            }}
          />
          <Text style={styles.movieTitle}>{searchResults.original_title}</Text>
          <Text style={styles.movieDescription}>{searchResults.overview}</Text>
        </View>
      ) : (
        <View style={styles.moviesContainer}>
          {movieList.map(movie => (
            <TouchableOpacity
              key={movie.id}
              onPress={() => handleMoviePress(movie.id)}>
              <View style={styles.movieContainer}>
                <Image
                  style={styles.moviePoster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }}
                />
                <Text style={styles.movieTitle}>{movie.original_title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

export default Movie;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#800000',
  },
  searchBar: {
    height: 50,
    borderColor: '#800000',
    borderWidth: 2,
    borderRadius: 25,
    width: '90%',
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    fontSize: 16,
  },
  moviesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  movieContainer: {
    marginBottom: 20,
    alignItems: 'center',
    width: 120,
    borderColor: '#800000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  moviePoster: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#800000',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  movieTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#800000',
  },
  movieDetailsContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  movieDescription: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});


