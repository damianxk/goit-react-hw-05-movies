import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        end
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        className={css.link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        className={css.link}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
