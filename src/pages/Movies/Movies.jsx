import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByTitle } from '../../services/API';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieByTitle = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieByTitle) return;

    fetchMovieByTitle(movieByTitle).then(data =>
      setSearchedMovies(data.results)
    );
  }, [movieByTitle]);

  const handleSubmit = async newQuery => {
    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <header>
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <main>{searchedMovies && <MovieList movies={searchedMovies} />}</main>
    </>
  );
};

export default Movies;
