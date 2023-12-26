import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [submittedData, setSubmittedData] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (you can send the data to a server or perform any desired action)
        alert('Form submitted:', formData);
        // Display submitted data in a div
        setSubmittedData(formData);
        // Reset the form after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          className='form-control mb-2'
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className='form-control mb-2'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          className='form-control mb-2'
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className='btn btn-warning'>Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data mt-5 bg-warning p-5">
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
