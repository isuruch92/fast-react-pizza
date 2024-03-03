import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header
      className="flex items-center justify-between bg-sky-400 px-4 py-3 uppercase shadow-lg shadow-slate-500/30 
    sm:px-6"
    >
      <Link to="/" className="flex-1 tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
