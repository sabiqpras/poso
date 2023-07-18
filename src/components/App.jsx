import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Commitmens from "./Commitmens/Commitmens";
import Help from "./Help/Help";
import GetStarted from "./GetStarted/GetStarted";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Commitmens />
      <Help />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
