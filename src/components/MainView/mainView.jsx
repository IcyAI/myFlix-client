import { useState, useEffect } from "react";

import { MovieCard } from '../MovieCard/movieCard';

import { MovieView } from "../MovieView/movieView";

import { LoginView } from "../LoginView/logoinView";

export const MainView = () => {
    const [movies, setMovie] = useState([]);

    const [selectedMovie, setSelectMovie] = useState(null);

    const [user,setUser] = useState(null);

    useEffect(() => {
        fetch("https://movies-flix50-8c220c6131d7.herokuapp.com/movies")
        .then((response) => response.json())
        .then((data) => {
           const moviesFromApi = data.map((movie) => {
            return {
              id: movie._id,
              title: movie.Title,
              description: movie.Description,
              genreName: movie.Genre.Name,
              genreDescription: movie.Genre.Description,
              directorName: movie.Director.Name,
              directorBio: movie.Director.Bio,
              directorBirth: movie.Director.Birth,
              directorDeath: movie.Director.Death,
              image: movie.ImagePath,
              featured: movie.Featured,
              
            };
          });

          setMovie(moviesFromApi);
        });
    }, []);

    if (!user) {
      return <LoginView />;
    }

    if(selectedMovie) {
      return (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectMovie(null)} />
      )
    }

    if (selectedMovie) {
      return <MovieView movie={selectedMovie} />;
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
      }

    return (
         <div>
            {movies.map((movie) => (
                <MovieCard 
                key= {movie.id}
                movie = {movie}
                onMovieClick={(newSelectMovie) => {
                  setSelectMovie(newSelectMovie);
                }}
                />
            ))}
         </div>
    );
}