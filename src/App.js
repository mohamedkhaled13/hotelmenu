import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./landing pages with sections/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ChineseMenu from "./Pages/ChineseMenu"; // Import your ChineseMenu component
import LobbyBarMenu from "./Pages/LobbyBarMenu.jsx"; // Import your LobbyBarMenu component
import RoomServiceMenu from "./Pages/RoomServiceMenu"; // Import your RoomServiceMenu component
import TVChannelsList from "./Pages/TVChannelsList"; // Import your TVChannelsList component
import HotelMap from "./Pages/HotelMap"; // Import your HotelMap component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {/* Wrap the Routes in a div with className "App-content" */}
        <div className="App-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/chinese-menu" element={<ChineseMenu />} />
            <Route path="/lobby-bar-menu" element={<LobbyBarMenu />} />
            <Route path="/room-service-menu" element={<RoomServiceMenu />} />
            <Route path="/TV-Channels-List" element={<TVChannelsList />} />
            <Route path="/Hotel-Map" element={<HotelMap />} />
            {/* Define other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
