import { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.movieList}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <div className={movie.poster_path ? css.card : css.cardNoImage}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://dostawka.com.pl/wp-content/uploads/2017/08/no-image.png'
                    }
                    alt={movie.title}
                    loading={lazy}
                    class={css.movieImg}
                  />
                  <p className={css.title}>{movie.title}</p>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
