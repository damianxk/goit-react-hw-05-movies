import { fetchCastById } from '../../services/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    fetchCastById(movieId).then(cast => {
      setCast(cast);
    });
  }, [movieId]);

  if (!cast) return;

  return (
    <>
      <ul className={css.castList}>
        {cast &&
          cast.map(item => {
            return (
              <li
                className={
                  item.profile_path ? css.castItem : css.castItemNoImage
                }
                key={item.id}
              >
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                    className={css.castImg}
                    loading="lazy"
                  />
                )}
                {!item.profile_path && (
                  <img
                    src="https://dostawka.com.pl/wp-content/uploads/2017/08/no-image.png"
                    alt="Actor without portrait"
                    className={css.castImg}
                    loading="lazy"
                  />
                )}
                <p className={css.castName}>{item.name}</p>
                <p>
                  <span>Character:</span> {item.character}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
