import { useState, useEffect } from "react";

import { MovieCard } from '../MovieCard/movieCard';

import { MovieView } from "../MovieView/movieView";

import { LoginView } from "../LoginView/logininView";

import { SignupView } from "../SignupView/signupView";

import { NavigationBar } from "../navigation-bar/navigation-bar";

import { ProfileView } from "../profile-view/profile-view";

import Row from "react-bootstrap/Row";

//import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const [movies, setMovie] = useState([]);

  //const [selectedMovie, setSelectMovie] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

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


  const addFav = (id) => {

    fetch(`https://movies-flix50-8c220c6131d7.herokuapp.com/users/${user.Username}/movies/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Failed to add");
      }
    }).then((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        //setIsFavorite(true);
      }
    }).catch(error => {
      console.error('Error: ', error);
    });
  };

  // Remove Favorite Movie
  const removeFav = (id) => {

    fetch(`https://movies-flix50-8c220c6131d7.herokuapp.com/users/${user.Username}/movies/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Failed to remove")
      }
    }).then((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        //setIsFavorite(false);
      }
    }).catch(error => {
      console.error('Error: ', error);
    });
  };

  return (

    <BrowserRouter>

      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />

      <Row className="justify-content-md-center">

        <Routes>

          <Route
            path="/users"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token) }} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView
                      user={user}
                      movies={movies}
                      removeFav={removeFav}
                      addFav={addFav}
                      setUser={setUser}
                    />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/:movieTitle"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>There is no movie</Col>
                ) : (
                  <Col md={12}>
                    <MovieView
                      movies={movies}
                      removeFav={removeFav}
                      addFav={addFav}
                    />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col> The List is Empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" md={3} key={movie.id}>
                        <MovieCard
                          movie={movie}
                          removeFav={removeFav}
                          addFav={addFav}
                          isFavorite={user.FavoriteMovies.includes(movie._id)} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />

        </Routes>

      </Row>

    </BrowserRouter>

  );

};