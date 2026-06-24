// Components
import { useState } from "react";
import AddBookmark from "./AddBookmark";

let Header = () => {
  let [isFormClose, setIsFormClose] = useState(true);

  let handleIsFormClose = (formState) => {
    setIsFormClose(formState);
  };

  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-deep font-[instrumentSerif] text-2xl md:text-3xl">
          markd.
        </h1>
        <div>
          <button
            className="bg-deep text-surface rounded font-[bricolage] text-xs py-2 px-4 md:text-sm cursor-pointer"
            onClick={() => {
              setIsFormClose(!isFormClose);
            }}
          >
            Add Bookmark
          </button>
        </div>
      </section>
      {isFormClose ? "" : <AddBookmark handleIsFormClose={handleIsFormClose} />}
    </>
  );
};

export default Header;
