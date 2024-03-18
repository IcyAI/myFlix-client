
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({movie, onMovieClick}) => {

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text> {movie.author} </Card.Text>
                <Button onClick={() => onMovieClick(movie)} variant="link"> open</Button>
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