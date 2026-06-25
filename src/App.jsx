import React from "react";

// Components
import Header from "./components/Header";
import BookmarkGrid from "./components/BookmarkGrid";

let App = () => {
  return (
    <>
      <div className="mx-4 mt-8 md:mt-16 md:mx-16 lg:mx-96">
        <Header />
        <BookmarkGrid />
      </div>
    </>
  );
};

export default App;
