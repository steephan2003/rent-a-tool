import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { addTool, firestore, collection, getDocs, deleteDoc, doc } from '../../firebase';

const AdminDashboard = () => {
  const [newToolName, setNewToolName] = useState('');
  const [newToolDescription, setNewToolDescription] = useState('');
  const [newToolRatePerDay, setNewToolRatePerDay] = useState('');
  const [newToolImage, setNewToolImage] = useState('');
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    try {
      const toolsCollection = collection(firestore, 'tools');
      const querySnapshot = await getDocs(toolsCollection);
      const toolsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTools(toolsData);
    } catch (error) {
      console.error('Error fetching tools:', error);
    }
  };

  const handleAddToolFormSubmit = async (event) => {
    event.preventDefault();
    const newToolData = {
      name: newToolName,
      description: newToolDescription,
      ratePerDay: newToolRatePerDay,
      image: newToolImage
    };
    try {
      await addTool(newToolData);
      fetchTools();
      clearFormFields();
    } catch (error) {
      console.error('Error adding tool:', error);
    }
  };

  const clearFormFields = () => {
    setNewToolName('');
    setNewToolDescription('');
    setNewToolRatePerDay('');
    setNewToolImage('');
  };

  const handleDeleteTool = async (toolId) => {
    try {
      await deleteDoc(doc(firestore, 'tools', toolId));
      fetchTools();
    } catch (error) {
      console.error('Error deleting tool:', error);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <div className="dashboard-header">
        <h1>Tool Rental Admin Dashboard</h1>
        <form onSubmit={handleAddToolFormSubmit} className="add-tool-box">
          <input type="text" placeholder="Tool Name" value={newToolName} onChange={(e) => setNewToolName(e.target.value)} className="input-box" />
          <input type="text" placeholder="Description" value={newToolDescription} onChange={(e) => setNewToolDescription(e.target.value)} className="input-box" />
          <input type="number" placeholder="Rate Per Day" value={newToolRatePerDay} onChange={(e) => setNewToolRatePerDay(e.target.value)} className="input-box" />
          <input type="text" placeholder="Image URL" value={newToolImage} onChange={(e) => setNewToolImage(e.target.value)} className="input-box" />
          <button type="submit" className="add-button">Add Tool</button>
        </form>
      </div>
      <div className="tool-list-container">
        {tools.map((tool) => (
          <div className="tool-item" key={tool.id} style={{backgroundImage: `url(${tool.image})`}}>
            <div className="tool-details">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <p>Rate Per Day: ${tool.ratePerDay}</p>
            </div>
            <button onClick={() => handleDeleteTool(tool.id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
