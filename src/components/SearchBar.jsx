let SearchBar = (props) => {
  let { handleSearch } = props;
  return (
    <>
      <div className="flex-1">
        <input
          type="text"
          name=""
          id=""
          className="w-full bg-surface border-2 border-mid outline-none rounded-md px-4 h-10 md:h-11  font-[coolvetica] text-deep text-sm md:text-base"
          placeholder="Search by title, note, or URL"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
