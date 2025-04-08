export function SearchBar(setSearchQuery) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
