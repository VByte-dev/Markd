// Components
import { useEffect, useState } from "react";
import BookmarkCard from "./BookmarkCard";

let BookmarkGrid = () => {
  let [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    let storedData = localStorage.getItem("readlater_bookmarks");

    if (storedData) {
      let parsedData = JSON.parse(storedData);
      setBookmarks(parsedData);
    }
  }, []);

  return (
    <>
      <section className="mt-25">
        {bookmarks.map((v, i, a) => {
          return <BookmarkCard bookmarks={v} key={i} />;
        })}
      </section>
    </>
  );
};

export default BookmarkGrid;
