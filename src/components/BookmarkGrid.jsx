// Components
import { useEffect, useState } from "react";
import BookmarkCard from "./BookmarkCard";

let BookmarkGrid = () => {
  let [bookmarks, setBookmarks] = useState([]);

  let handleDelete = (id) => {
    let storedData = localStorage.getItem("readlater_bookmarks");
    if (storedData) {
      let parsedData = JSON.parse(storedData);
      let restBookmarks = parsedData.filter((v, i, a) => {
        if (v.id !== id) {
          return true;
        }
      });
      localStorage.setItem(
        "readlater_bookmarks",
        JSON.stringify(restBookmarks),
      );
      window.dispatchEvent(new Event("bookmarksUpdated"));
    }
  };

  let handleVisitCounter = (id) => {
    let storedData = localStorage.getItem("readlater_bookmarks");

    if (storedData) {
      let parsedData = JSON.parse(storedData);
      let vcUpdatedBookmarks = parsedData.map((v, i, a) => {
        if (v.id === id) {
          v.visitCount = ++v.visitCount;  
        }
        return v;
      });
      localStorage.setItem(
        "readlater_bookmarks",
        JSON.stringify(vcUpdatedBookmarks),
      );
      window.dispatchEvent(new Event("bookmarksUpdated"));
    }
  };

  useEffect(() => {
    let fetchBookmarks = () => {
      let storedData = localStorage.getItem("readlater_bookmarks");

      if (storedData) {
        let parsedData = JSON.parse(storedData);
        setBookmarks(parsedData);
      }
    };
    fetchBookmarks();

    window.addEventListener("bookmarksUpdated", fetchBookmarks);

    return () => {
      window.removeEventListener("bookmarksUpdated", fetchBookmarks);
    };
  }, []);

  return (
    <>
      <section className="mt-25">
        {bookmarks.map((v, i, a) => {
          return (
            <BookmarkCard
              bookmarks={v}
              handleDelete={handleDelete}
              handleVisitCounter={handleVisitCounter}
              key={i}
            />
          );
        })}
      </section>
    </>
  );
};

export default BookmarkGrid;
