import React from 'react';
import Footer_v1 from '../global-components/footer';
import Navbar from '../global-components/navbar';

const CareerGrid = () => {
  
  return (
    <div>
     
<Navbar/>
<div>
  
<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      width: '100%',
      minHeight: '100vh',
    }}>
      <div style={{
        backgroundImage: `url('https://www.confident-group.com/wp-content/uploads/2023/09/shutterstock_84368758.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        width: '100%',
        marginBottom: '20px',
      }} />
      <div style={{
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Career Opportunities</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}>
          <div style={{
            flexBasis: '30%',
            marginRight: '20px',
          }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Category 1:</label>
            <select style={{
              width: '100%',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}>
              <option value="">Select an option</option>
              <option value="category-1-option-1">Option 1</option>
              <option value="category-1-option-2">Option 2</option>
              <option value="category-1-option-3">Option 3</option>
            </select>
          </div>
          <div style={{
            flexBasis: '30%',
            marginRight: '20px',
          }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Category 2:</label>
            <select style={{
              width: '100%',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}>
              <option value="">Select an option</option>
              <option value="category-2-option-1">Option 1</option>
              <option value="category-2-option-2">Option 2</option>
              <option value="category-2-option-3">Option 3</option>
            </select>
          </div>
          <div style={{
            flexBasis: '30%',
          }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Category 3:</label>
            <select style={{
              width: '100%',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}>
              <option value="">Select an option</option>
              <option value="category-3-option-1">Option 1</option>
              <option value="category-3-option-2">Option 2</option>
              <option value="category-3-option-3">Option 3</option>
            </select>
          </div>
        </div>
        <div style={{
          marginBottom: '20px',
        }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Job Listings:</h2>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
          }}>
            <li style={{
              marginBottom: '20px',
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Job Title 1</h3>
              <p>Job description 1</p>
            </li>
            <li style={{
              marginBottom: '20px',
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Job Title 2</h3>
              <p>Job description 2</p>
            </li>
            <li style={{
              marginBottom: '20px',
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Job Title 3</h3>
              <p>Job description 3</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
     <Footer_v1/>
    </div>
  );
};

export default CareerGrid;
