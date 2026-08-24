import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Components
import BookmarkCard from "./BookmarkCard";
import SearchBar from "./SearchBar";
import Refine from "./Refine";
import StateMessage from "./StateMessage";

const BookmarkGrid = () => {
  const navigateTo = useNavigate();

  const [bookmarks, setBookmarks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [refine, setRefine] = useState({
    tag: "all",
    usage: "all",
  });
  const [isRefineClose, setIsRefineClose] = useState(true);

  const fetchBookmarks = async () => {
    // LocalStorage Version
    // const storedData = localStorage.getItem("readlater_bookmarks");

    // if (storedData) {
    //   const parsedData = JSON.parse(storedData);
    //   setBookmarks(parsedData);
    // }

    // API Version
    try {
      // Token
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://markd-5jlq.onrender.com/bookmark",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setBookmarks(response.data.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        console.log("From BookmarkGrid");
        navigateTo("/login");
      }
      console.log(err);
    }
  };

  const handleRefine = (newRefine) => {
    setRefine(newRefine);
    setIsRefineClose(true);
  };

  const handleDelete = async (id) => {
    // LocalStorage Version
    // const storedData = localStorage.getItem("readlater_bookmarks");

    // if (storedData) {
    //   const parsedData = JSON.parse(storedData);

    //   const restBookmarks = parsedData.filter(
    //     (bookmark) => bookmark.id !== id,
    //   );

    //   localStorage.setItem(
    //     "readlater_bookmarks",
    //     JSON.stringify(restBookmarks),
    //   );

    //   window.dispatchEvent(
    //     new Event("bookmarksUpdated"),
    //   );
    // }

    // API Version
    try {
      // Token
      const token = localStorage.getItem("token");
      await axios.delete(`https://markd-5jlq.onrender.com/bookmark/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchBookmarks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleVisitCounter = async (id) => {
    // LocalStorage Version
    // const storedData = localStorage.getItem("readlater_bookmarks");

    // if (storedData) {
    //   const parsedData = JSON.parse(storedData);

    //   const updatedBookmarks = parsedData.map(
    //     (bookmark) => {
    //       if (bookmark.id === id) {
    //         bookmark.visitCount += 1;
    //       }

    //       return bookmark;
    //     },
    //   );

    //   localStorage.setItem(
    //     "readlater_bookmarks",
    //     JSON.stringify(updatedBookmarks),
    //   );

    //   window.dispatchEvent(
    //     new Event("bookmarksUpdated"),
    //   );
    // }

    // API Version
    const bookmark = bookmarks.find((bookmark) => bookmark._id === id);

    if (!bookmark) {
      return;
    }

    const newVisitCount = bookmark.visitCount + 1;

    try {
      // Token
      const token = localStorage.getItem("token");
      await axios.patch(
        `https://markd-5jlq.onrender.com/bookmark/${id}`,
        {
          visitCount: newVisitCount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchBookmarks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (searchValue) => {
    setSearchQuery(searchValue);
  };

  let refinedBookmarks = [...bookmarks];

  if (refine.tag !== "all") {
    refinedBookmarks = refinedBookmarks.filter(
      (bookmark) => bookmark.tag === refine.tag,
    );
  }

  if (refine.usage === "unused") {
    refinedBookmarks = refinedBookmarks.filter(
      (bookmark) => bookmark.visitCount === 0,
    );
  }

  if (refine.usage === "used") {
    refinedBookmarks = refinedBookmarks.filter(
      (bookmark) => bookmark.visitCount > 0,
    );
  }

  refinedBookmarks = refinedBookmarks.filter((bookmark) => {
    const query = searchQuery.toLowerCase();

    return (
      bookmark.title?.toLowerCase().includes(query) ||
      bookmark.note?.toLowerCase().includes(query) ||
      bookmark.url?.toLowerCase().includes(query)
    );
  });

  useEffect(() => {
    fetchBookmarks();

    window.addEventListener("bookmarksUpdated", fetchBookmarks);

    return () => {
      window.removeEventListener("bookmarksUpdated", fetchBookmarks);
    };
  }, []);

  return (
    <section className="mt-5 md:mt-10">
      <div className="flex gap-2">
        <SearchBar handleSearch={handleSearch} />

        <div>
          <button
            className="bg-deep rounded-md font-[bricolage] text-surface h-10 md:h-11 px-8 text-sm md:text-base"
            onClick={() => {
              setIsRefineClose(!isRefineClose);
            }}
          >
            Refine
          </button>
        </div>
      </div>

      {!isRefineClose && (
        <div>
          <Refine
            bookmarks={bookmarks}
            refine={refine}
            handleRefine={handleRefine}
          />
        </div>
      )}

      <div className="mt-10 md:mt-15">
        {bookmarks.length === 0 ? (
          <StateMessage
            title="Nothing saved yet"
            description="Save something worth revisiting"
          />
        ) : refinedBookmarks.length === 0 ? (
          <StateMessage
            title="Nothing matched"
            description="Try a different keyword"
          />
        ) : (
          refinedBookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark._id}
              bookmarks={bookmark}
              handleDelete={handleDelete}
              handleVisitCounter={handleVisitCounter}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BookmarkGrid;
