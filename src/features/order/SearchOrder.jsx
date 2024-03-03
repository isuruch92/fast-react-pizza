import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className="md:mx-4">
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-sky-100 px-4 py-2 text-xs 
        transition-all duration-300 placeholder:text-slate-400 focus:w-32
        focus:outline-none focus:ring focus:ring-sky-500 focus:ring-opacity-50 
        min-[420px]:w-32 min-[420px]:focus:w-36 sm:w-64 sm:text-sm sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
