import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import ActionBar from "./components/ActionBar";
import BookmarkGrid from "./components/BookmarkGrid";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

let MarkdApp = () => {
  return (
    <>
      <div className="mx-4 mt-8 md:mt-16 md:mx-16 lg:mx-96 selection:bg-deep selection:text-surface">
        <Header />
        <ActionBar />
        <BookmarkGrid />
      </div>
    </>
  );
};

let Home = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <ProtectedRoute>
        <MarkdApp />
      </ProtectedRoute>
    );
  }
  return <LandingPage />;
};

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/app" element={<ProtectedRoute><MarkdApp /></ProtectedRoute>}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

