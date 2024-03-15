
export const MovieView = ({movie, onBackClick})  => {

    return (
           
        <div>
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

            <button onClick={onBackClick}>Back</button>
        </div>
    );
};