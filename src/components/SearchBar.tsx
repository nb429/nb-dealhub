import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search for deals, restaurants, spas..." 
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-black"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-600 text-white px-8 py-3 rounded-r-xl hover:bg-teal-700 transition-colors font-medium text-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;