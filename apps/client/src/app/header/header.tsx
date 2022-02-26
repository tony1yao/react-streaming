import { Link } from 'react-router-dom';
import GoogleAuth from '../google-auth/google-auth';
import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className='ui secondary pointer menu'>
      <Link to='/' className='item'>Streamers</Link>
      <div className='right menu item'>
        <Link to='' className='item'>Streaming</Link>
        <Link to='' className='item'>Logout</Link>
        <GoogleAuth></GoogleAuth>
      </div>

    </div>
  );
}

export default Header;
