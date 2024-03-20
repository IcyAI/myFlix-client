import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { BookmarkHeart, BookmarkHeartFill } from "react-bootstrap-icons";
// export const MovieCard = ({movie, onMovieClick}) => {

//     return (
//         <Card className="h-100">
//             <Card.Img variant="top" src={movie.image} />
//             <Card.Body>
//                 <Card.Title> {movie.title} </Card.Title>
//                 <Card.Text> {movie.author} </Card.Text>
//                 <Button onClick={() => onMovieClick(movie)} variant="link"> open</Button>
//             </Card.Body>
//         </Card>
//     );
// };


// MovieCard.PropTypes = {
//     movie: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         genreName: PropTypes.string.isRequired,
//         directorName: PropTypes.string.isRequired,
//     }).isRequired,
//     onMovieClick: PropTypes.func.isRequired
// };

export const MovieCard = ({ movie, addFav, removeFav, isFavorite }) => {

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text> {movie.directorName} </Card.Text>
                <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
                    <Button variant="link"> open</Button>
                </Link>

                <div>
                    {user.FavoriteMovies.includes(movie.id) ? (
                        <Button on onClick={() => removeFav(movie.id)}>Remove from Favorite</Button>
                    ) : (
                        <Button onClick={() => addFav(movie.id)}>Add to Favorite</Button>
                    )}
                </div>

            </Card.Body>
        </Card>
    );
};


MovieCard.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genreName: PropTypes.string.isRequired,
        directorName: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};