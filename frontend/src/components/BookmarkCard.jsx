const BookmarkCard = (props) => {
  const { _id, url, title, note, tag, visitCount, createdAt } = props.bookmarks;

  const { handleDelete, handleVisitCounter } = props;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="mb-4 md:mb-8 border-2 rounded-md p-4 bg-white border-light">
      <div className="flex justify-between mb-2 md:mb-4">
        <div className="border-2 w-8 h-8 flex justify-center items-center rounded-full bg-dark border-mid font-[bricolage] text-surface">
          <h1>{visitCount}</h1>
        </div>

        <div
          className="cursor-pointer border-2 w-8 h-8 flex justify-center items-center rounded-md bg-red-400 border-red-300 font-[bricolage] text-surface"
          onClick={() => {
            handleDelete(_id);
          }}
        >
          <i className="ri-delete-bin-line"></i>
        </div>
      </div>

      <div
        className="bg-surface rounded-md p-4 border-2 border-light cursor-pointer truncate"
        title={`Visit ${url}`}
        onClick={() => {
          window.open(`https://${url}`, "_blank");
          handleVisitCounter(_id);
        }}
      >
        <h1 className="font-[coolvetica] text-green-950 text-lg md:text-xl capitalize">
          {title}
        </h1>

        <h1 className="font-[coolvetica] truncate text-deep text-md md:text-lg">
          {note}
        </h1>

        <h1 className="font-[coolvetica] text-deep opacity-80 flex items-center gap-1 mt-1 md:mt-2 text-sm md:text-base lowercase">
          <i className="ri-link"></i>
          {url}
        </h1>

        <div className="mt-2 md:mt-4">
          <span className="border-2 font-[bricolage] text-xs md:text-sm bg-light text-deep border-mid inline px-4 py-1 rounded-full lowercase">
            {tag}
          </span>
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <span className="font-[coolvetica] text-deep opacity-80 text-xs md:text-sm">
          {formattedDate}
        </span>
      </div>
    </section>
  );
};

export default BookmarkCard;
