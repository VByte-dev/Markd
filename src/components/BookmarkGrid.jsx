import { useEffect, useState } from "react";

// Components
import BookmarkCard from "./BookmarkCard";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import StateMessage from "./StateMessage";

let BookmarkGrid = () => {
  let [bookmarks, setBookmarks] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");

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

  let handleSearch = (sQ) => {
    setSearchQuery(sQ);
  };

  let filteredBookmarks = bookmarks.filter((v, i, a) => {
    return (
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.url.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
      <section className="mt-15 md:mt-20">
        <div className="flex gap-2">
          <SearchBar handleSearch={handleSearch} />
          <Filters />
        </div>
        <div className="mt-10 md:mt-15">
          {bookmarks.length === 0 ? (
            <StateMessage
              title={"Nothing saved yet"}
              description={"Save something worth revisiting "}
            />
          ) : filteredBookmarks.length === 0 ? (
            <StateMessage
              title={"Nothing matched"}
              description={"Try a different keyword"}
            />
          ) : (
            filteredBookmarks.map((v, i, a) => {
              return (
                <BookmarkCard
                  bookmarks={v}
                  handleDelete={handleDelete}
                  handleVisitCounter={handleVisitCounter}
                  key={i}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default BookmarkGrid;
