import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Featured.scss";

const Featured = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };
  
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            The perfect <span>freelance</span> opportunities for you!
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/pngwing.com.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
