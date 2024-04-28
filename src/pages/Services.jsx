import React, { useState, useEffect } from "react";
import { firestore, collection, getDocs } from "../../firebase";
import "./Services.css"; // Import CSS file for styling
import Navbar2 from "./Navbar2";

const Services = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    try {
      const toolsCollection = collection(firestore, "tools");
      const querySnapshot = await getDocs(toolsCollection);
      const toolsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTools(toolsData);
    } catch (error) {
      console.error("Error fetching tools:", error);
    }
  };

  const handleRentClick = (toolId) => {
    console.log(`Rent tool with ID: ${toolId}`);
  };

  return (
    <div>
      <div className="nav2">
        <Navbar2 />
      </div>
      <div className="container2">
        <div className="services2">
          <h1>Our Services</h1>
          <div className="tools-container2">
            {tools.map((tool) => (
              <div key={tool.id} className="tool-card2">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="tool-image2"
                />
                <div className="tool-details2">
                  <div className="tool-name2">{tool.name}</div>
                  <div className="tool-description2">
                    {tool.description}
                  </div>
                  <div className="tool-rate2">
                    Rate Per Day: {tool.ratePerDay}
                  </div>
                  <button
                    onClick={() => handleRentClick(tool.id)}
                    className="rent-button2"
                  >
                    Rent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
