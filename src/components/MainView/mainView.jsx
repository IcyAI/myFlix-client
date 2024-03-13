import { useState } from "react";

//import { movieCard } from '../MovieCard/movieCard';

//import { movieView } from "..\MovieView\movieView.jsx";

export const mainView = () => {
    const [movies, setMovie] = useState([

        {
            id: 1,
            Title: "Silence of the Lambs",
            Description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
            Genre: {
              Name: "Thriller",
              Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
            },
            Director: {
              Name: "Jonathan Demme",
              Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
              Birth: "1944",
              Death: "2017"
            },
            ImagePath: "silenceofthelambs.png",
            Featured: true,
        },

        {
            id: 2,
            Title: "The Fly",
            Description: "The Fly tells of an eccentric scientist who, after one of his experiments goes wrong, slowly turns into a fly-hybrid creature. The score was composed by Howard Shore and the make-up effects were created by Chris Walas, along with makeup artist Stephan Dupuis.",
            Genre: {
              Name: "Thriller",
              Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
            },
            Director: {
              Name: "David Cronenberg",
              Bio: "David Paul Cronenberg CC OOnt (born March 15, 1943) is a Canadian film director and screenwriter. He is a principal originator of the body horror genre, with his films exploring visceral bodily transformation, infectious diseases, and the intertwining of the psychological, physical, and technological.",
              Birth: "1943",
              Death: "Alive"
            },
            ImagePath: "https://www.imdb.com/title/tt0091064/mediaviewer/rm1342393088/?ref_=tt_ov_i",
            Featured: true,
        },

        {
            id: 3,
            Title: "Dead Ringers",
            Description: "Twin gynecologists take full advantage of the fact that nobody can tell them apart until their relationship begins to deteriorate over a woman.",
            Genre: {
              Name: "Thriller",
              Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
            },
            Director: {
              Name: "David Cronenberg",
              Bio: "David Paul Cronenberg CC OOnt (born March 15, 1943) is a Canadian film director and screenwriter. He is a principal originator of the body horror genre, with his films exploring visceral bodily transformation, infectious diseases, and the intertwining of the psychological, physical, and technological.",
              Birth: "1943",
              Death: "Alive"
            },
            ImagePath: "https://www.imdb.com/title/tt0094964/mediaviewer/rm1424694016/?ref_=tt_ov_i",
            Featured: true,
        }
    ]);

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
      }

    return (
         <div>
            {movies.map((movie) => {
                return <div key={movie.id}> {movie.Title} </div>;
            })}
         </div>
    );
}