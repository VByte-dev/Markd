import AddBookmark from "./AddBookmark";
import { useState } from "react";

let ActionBar = () => {
  let [isFormClose, setIsFormClose] = useState(true);

  let handleIsFormClose = (formState) => {
    setIsFormClose(formState);
  };
  return (
    <>
      <section className="flex justify-end mt-10 md:mt-15">
        <div className="flex gap-4">
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

export default ActionBar;
