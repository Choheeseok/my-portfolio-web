import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

function Nav() {
  return (
    <>
      {NavLinks().map(link =>
        <Link to={link.url}key={link.id}>
          {link.name}
          </ Link>
        )}
    </>
  );
}

export default Nav;