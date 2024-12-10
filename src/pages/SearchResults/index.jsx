import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gigs } from "@/data"; // Ensure "@/data" points to the correct data file
import GigCard from "@/components/GigCard"; // Import the GigCard component
import "./SearchResults.scss"; // Import the CSS file for styling

const SearchResults = () => {
  const [filteredGigs, setFilteredGigs] = useState([]);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchTerm) {
      const results = gigs.filter(gig =>
        gig.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGigs(results);
    }
  }, [searchTerm]);

  return (
    <div className="resultsPage">
      <h2>Search Results for &quot;{searchTerm}&quot;</h2>
      <div className="results">
        {filteredGigs.length > 0 ? (
          filteredGigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;