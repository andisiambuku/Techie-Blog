import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About"
import AddNew from "./AddNew";
import Article from "./Article";


function App() {
  return (
 
    <div className="App">
      <Header />
      
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/addnew" element={<AddNew />} />       
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="articles/:id" element={<Article />} />
        </Routes>
        <Footer />
      </div>
   
  
  );
}

export default App;
