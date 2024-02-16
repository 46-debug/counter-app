import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import Counter from "./Counter";


const App = () => {
  return(
    <>
     <Header/>
     <Counter/>
     <Footer/>
    </>
  )
};

export default App