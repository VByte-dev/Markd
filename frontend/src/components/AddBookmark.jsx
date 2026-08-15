import { useState } from "react";
import axios from "axios";

const AddBookmark = (props) => {
  const { handleIsFormClose } = props;

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");

  const handleAddBookmark = async (e) => {
    e.preventDefault();

    const newBookmark = {
      id: Date.now().toString(),
      url,
      title,
      note,
      tag,
      visitCount: 0,
      createdAt: new Date().toISOString(),
    };

    // LocalStorage Version
    // const existingBookmarks =
    //   JSON.parse(localStorage.getItem("readlater_bookmarks")) || [];

    // existingBookmarks.push(newBookmark);

    // localStorage.setItem(
    //   "readlater_bookmarks",
    //   JSON.stringify(existingBookmarks),
    // );

    // API Version
    try {
      await axios.post("https://markd-5jlq.onrender.com/bookmark", {
        url,
        title,
        note,
        tag,
        visitCount: 0,
      });

      window.dispatchEvent(new Event("bookmarksUpdated"));

      handleIsFormClose(true);

      setUrl("");
      setTitle("");
      setNote("");
      setTag("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="w-full my-16 p-4 md:p-6 bg-white rounded-2xl border-2 border-light">
      <div
        className="flex justify-end mb-4 md:mb-6"
        onClick={() => {
          handleIsFormClose(true);
        }}
      >
        <i className="ri-close-line text-surface bg-deep text-xl md:text-2xl w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer"></i>
      </div>

      <form onSubmit={handleAddBookmark}>
        <div className="mb-4">
          <input
            type="url"
            required
            placeholder="Paste a link worth saving"
            className="w-full border-2 outline-none rounded-lg py-2 px-4 text-deep bg-white focus:bg-surface border-light font-[coolvetica] text-sm md:text-base"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            required
            placeholder="Give it a title"
            className="w-full border-2 outline-none rounded-lg py-2 px-4 text-deep bg-white focus:bg-surface border-light font-[coolvetica] text-sm md:text-base"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            required
            placeholder="Why are you saving this?"
            className="w-full border-2 outline-none rounded-lg py-2 px-4 text-deep bg-white focus:bg-surface border-light font-[coolvetica] text-sm md:text-base"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            required
            placeholder="Add a tag"
            className="w-full border-2 outline-none rounded-lg py-2 px-4 text-deep bg-white focus:bg-surface border-light font-[coolvetica] text-sm md:text-base"
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-deep text-sm text-surface font-[bricolage] w-full py-2 rounded-lg border-2 border-deep transition md:text-base cursor-pointer"
          >
            Mark It
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBookmark;
