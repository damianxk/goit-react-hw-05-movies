import { fetchMovieDetails } from '../../services/API';
import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId).then(details => setMovieDetails(details));
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const backLink = location.state?.from ?? '/movies';

  return (
    <main>
      <Link to={backLink}>
        <p className={css.back}>Go back</p>
      </Link>
      <div className={css.wrapper}>
        {movieDetails && (
          <div className={css.container}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                className={css.movieImg}
                loading={lazy}
              />
            </div>
            <div className={css.description}>
              <div className={css.title}>
                <h2>{movieDetails.title}</h2>
                <p>({parseInt(movieDetails.release_date)})</p>
              </div>
              <p>
                User Score: {`${movieDetails.vote_average.toFixed(2)} | 10`}
              </p>
              <h3>Overview</h3>
              <p>{`${movieDetails.overview}`}</p>
              <h3>Genres</h3>
              <p>{`${movieDetails.genres
                .map(genre => genre.name)
                .join(' / ')}`}</p>
            </div>
          </div>
        )}
        <p className={css.info}>Additional information</p>
        <ul className={css.reviewList}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#b92121' : 'inherit',
              })}
              to="cast"
              state={{ from: backLink }}
              className={css.link}
            >
              <p className={css.link}>Cast</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#b92121' : 'inherit',
              })}
              to="reviews"
              state={{ from: backLink }}
            >
              <p className={css.link}>Reviews</p>
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
