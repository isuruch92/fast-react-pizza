import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-sky-400 font-semibold uppercase tracking-wide text-slate-800 transition duration-500 hover:bg-cyan-400 hover:shadow-lg focus:bg-sky-300 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2 focus-visible:outline-none active:bg-cyan-400 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    secondary:
      'inline-block text-sm rounded-full border-2 border-slate-300 font-semibold uppercase tracking-wide text-slate-400 transition duration-500 hover:bg-slate-300 hover:text-stone-800 hover:shadow-lg focus:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-200 focus:ring-offset-2 focus-visible:outline-none focus:text-stone-800 active:bg-slate-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
