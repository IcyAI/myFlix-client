import { useState, useEffect } from "react";

import { MovieCard } from '../MovieCard/movieCard';

import { MovieView } from "../MovieView/movieView";

import { LoginView } from "../LoginView/logininView";

import { SignupView } from "../SignupView/signupView";

import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";

import Col from 'react-bootstrap/Col';

export const MainView = () => {
    const [movies, setMovie] = useState([]);

    const [selectedMovie, setSelectMovie] = useState(null);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);

    useEffect(() => {
      if (!token) {
        return;
      }
  
      fetch("https://movies-flix50-8c220c6131d7.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Movies data: ", data);
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
    }, [token]);

    return (

      <Row className="justify-content-md-center">
        {!user ? (
          <Col md={5}>
          <LoginView onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} />
          or
          <SignupView />
          </Col>
        ) 
        
        : selectedMovie ? (
          <Col md={8}>
          <MovieView movie={selectedMovie} onBackClick={() => setSelectMovie(null)} />
          </Col>
        ) 
        
        : movies.length === 0 ?(
          <div>The list is empty!</div>
        ) 
        
        : (
          <>
          {movies.map((movie) => (
            <Col className="mb-5" key={movie.id} md={3}>
            <MovieCard
             movie = {movie}
             onMovieClick={(newSelectMovie) => {
               setSelectMovie(newSelectMovie);
             }}
             />
             </Col>
          ))}
          <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>

          </>
        )}  
 
      </Row>
    );
  };