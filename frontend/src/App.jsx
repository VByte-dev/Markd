import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import BookmarkGrid from "./components/BookmarkGrid";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";

let MarkdApp = () => {
  return (
    <>
      <div className="mx-4 mt-8 md:mt-16 md:mx-16 lg:mx-96 selection:bg-deep selection:text-surface">
        <Header />
        <BookmarkGrid />
      </div>
    </>
  );
};

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MarkdApp />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
