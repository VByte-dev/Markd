import { useState } from "react";

// Components
import Profile from "./Profile";

import { useNavigate } from "react-router-dom";

let Header = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-deep font-[instrumentSerif] text-2xl md:text-3xl">
          markd.
        </h1>
        <div>
          <Profile />
        </div>
      </section>
    </>
  );
};

export default Header;
