# Movie Explorer Lite

### Features

1. Onboarding Screens:
   - Visually appealing onboarding screens introducing the core features of the app.
   - Potential use of animations or interactive elements to enhance user engagement.

2. Home Screen:
   - Displays a list of movies retrieved from the TMDB API.
   - Each movie item showcases the title and a poster image.
   - Includes a search bar at the top for users to search movies by title.

### Public API


## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/RumezaFatima/MovieExplorerLite.git
   cd movie-explorer-lite
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Add TMDB API Key**

   Add your TMDB API key in src/api/GetMovie.js:

   ```plaintext
   const API_KEY=your_api_key_here
   ```

4. **Start the Metro Server**

   To start Metro, run the following command from the root of your React Native project:

   ```bash
   npm start
   ```

5. **Run the Application**

   For Android:

   ```bash
   npm run android
   ```

   For iOS:

   ```bash
   npx pod-install ios
   npm run ios
   ```
