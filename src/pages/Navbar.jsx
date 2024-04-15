import React, { useState, useEffect } from "react";
import axios from "axios";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [favoriteReason, setFavoriteReason] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.npms.io/v2/search?q=${searchTerm}`
      );
      setSearchResults(response?.data?.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    handleSearch(searchTerm);
  };

  const handleCheckboxChange = (e) => {
    const itemName = e.target.value;
    const isChecked = e.target.checked;
    setSelectedItems((prevState) => ({
      ...prevState,
      [itemName]: isChecked,
    }));
  };

  const handleSubmit = () => {
    const selectedFavorites = Object.keys(selectedItems).filter(
      (item) => selectedItems[item]
    );
      
    localStorage.setItem(
      "submittedData",
      JSON.stringify({ favorites: selectedFavorites, reason: favoriteReason })
    );
    setSubmittedData({ favorites: selectedFavorites, reason: favoriteReason });
  };

  useEffect(() => {
    const submittedDataFromLocalStorage = localStorage.getItem("submittedData");
    if (submittedDataFromLocalStorage) {
      setSubmittedData(JSON.parse(submittedDataFromLocalStorage));
    }
  }, []);

  return (
    <nav className="">
      <div className="container mx-auto">
        <div className="flex flex-col p-5">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="px-2 py-1 border border-gray-300 rounded-lg"
          />

          <div>
            {searchResults.map((item, index) => (
              console.log(searchResults?.res);
              <div key={index}>
                <input
                  type="checkbox"
                  value={item.package.name}
                  onChange={handleCheckboxChange}
                />
                <label>{item.package.name}</label>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, borderColor: "red" }}>
            <p>Why is this a favorite?</p>
            <textarea
              style={{ height: 60, width: "80%", borderColor: "red" }}
              value={favoriteReason}
              onChange={(e) => setFavoriteReason(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "green",
              width: "40%",
              marginLeft: 100,
              marginTop: 20,
            }}  
          >
            Submit
          </button>

          {submittedData && (
            <div
              style={{ marginTop: 20, borderWidth: 2, flexDirection: "row" }}
            >
              <p> {submittedData.favorites.join("\n")}</p>
              <p> {submittedData.reason}</p>
            </div>
          )}
          <div>
            <button style={{ backgroundColor: "green" }}>Add Favourite</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
