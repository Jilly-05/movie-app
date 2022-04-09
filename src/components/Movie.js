import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, mediumCoverImage, title, summary, genres }) {
    return (

        <div className="profile profile-default" >
            <div className="profile__image"><img src={mediumCoverImage} alt="Doggo" /></div>
            <div className="profile__info">
                <h3>{title}</h3>
                <p className="profile__info__extra">{summary}</p>
            </div>
            <div className="profile__stats">
                <p className="profile__stats__title">Genres</p>
                {genres.map((g) => (
                    <span className="profile__stats__info" key={g}>{g}</span>
                ))}
            </div>
            <Link to={`/movie/${id}`}><div className="profile__cta button">Watch Now!</div></Link>
        </div>

    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;