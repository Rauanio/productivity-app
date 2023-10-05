import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};