import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Userinfo from "./Pages/Userinfo";
import Notfound from "./Pages/Notfound";
import React from "react";
import Navbar from "./Component_layout/Navbar";
import Footer from "./Component_layout/Footer";
import Alert from "./Component_layout/Alert";
import { GithubProvider } from "./Context/Github/GithubContext";
import { AlertProvider } from "./Context/Alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<Userinfo />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
