
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
//import { MovieCard } from "../movie-card/movie-card";

export const MovieView = ({ movies, removeFav, addFav }) => {

    const { movieTitle } = useParams();

    const movie = movies.find((m) => m.title === movieTitle);

    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(movie);
    // console.log(user);

    return (

        <Row className="my-5 justify-content-md-center">

            <Col md={5}>

                <div>
                    <img src={movie.image} />
                </div>

                <div>
                    <span>Title:</span>
                    <span>{movie.title}</span>
                </div>

                <div>
                    <span>Description:</span>
                    <span>{movie.description}</span>
                </div>

                <div>
                    <span>Genre</span>
                </div>

                <div>
                    <span>Name:</span>
                    <span>{movie.genreName}</span>
                </div>

                <div>
                    <span>Description:</span>
                    <span>{movie.genreDescription}</span>
                </div>

                <div>
                    <span>Director</span>
                </div>

                <div>
                    <span>Name:</span>
                    <span>{movie.directorName}</span>
                </div>

                <div>
                    <span>Bio:</span>
                    <span>{movie.directorBio}</span>
                </div>

                <div>
                    <span>Birth:</span>
                    <span>{movie.directorBirth}</span>
                </div>

                <div>
                    <span>Death:</span>
                    <span>{movie.directorDeath}</span>
                </div>

                <div>
                    {user.FavoriteMovies.includes(movie.id) ? (
                        <Button on onClick={() => removeFav(movie.id)}>Remove from Favorite</Button>
                    ) : (
                        <Button onClick={() => addFav(movie.id)}>Add to Favorite</Button>
                    )}
                </div>

                <Link to="/">
                    <Button variant="primary">Back</Button>
                </Link>
            </Col>
        </Row>


    );
};