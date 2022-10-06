import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import Home from "./Home";
// import AddNew from "./AddNew";
// import Article from "./Article";


function App() {
  return (
    <BrowserRouter>
    <div className="m- 0">
      <Header />
      <Footer />
      <div className="content">
        <Routes> 
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="addnew/" element={<AddNew />} /> */}
        {/* <Route path="article/:id" element={<Article />} /> */}
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
          
        </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
