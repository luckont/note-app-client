import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

import HomePage from "./pages/HomePage";
import DetailNote from "./pages/DetailNote";
import AccountPage from "./pages/AccountPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailNote />} />
          <Route path="/create-account" element={<AccountPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
