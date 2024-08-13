import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EnquiryForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        budget: '',
        propertyType: 'Residential',
        recipientEmail: 'vivesh2911@gmail.com' // Adding the recipient email here
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use emailjs to send form data via email
        emailjs.send(
            'YOUR_SERVICE_ID',                // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID',                // Replace with your EmailJS template ID
            formData,                          // Form data to be sent
            'YOUR_USER_ID'                     // Replace with your EmailJS user ID
        )
        .then((result) => {
            alert('Enquiry sent successfully!');
            onClose();
        }, (error) => {
            console.error('Error:', error.text);
            alert('There was an error sending your enquiry.');
        });
    };

    // Inline CSS for styling the form elements
    const formStyle = {
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '10px',
        color: '#333',
        fontSize: '14px',
        fontWeight: 'bold',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '14px',
    };

    const selectStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '14px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const cancelButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#6c757d',
        marginTop: '10px',
    };

    return (
        <div style={formStyle}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Make an Enquiry</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                    <label style={labelStyle}>Number:</label>
                    <input type="text" name="number" value={formData.number} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                    <label style={labelStyle}>Email Address:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                    <label style={labelStyle}>Budget:</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                    <label style={labelStyle}>Property Type:</label>
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} style={selectStyle}>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>
                <button type="submit" style={buttonStyle}>Submit</button>
                <button type="button" onClick={onClose} style={cancelButtonStyle}>Cancel</button>
            </form>
        </div>
    );
};

export default EnquiryForm;
