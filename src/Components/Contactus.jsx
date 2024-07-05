// src/components/ContactUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://shoyabmateen-booksworm-den-backend.onrender.com/submit-form', formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', description: '' });
    } catch (error) {
      setMessage('Error submitting the form');
    }
  };
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUkSug65U-ktuxjUxJPWgC3f1zUBduQH3Ig&s)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex items-center justify-center h-full">
        <motion.form
          className="w-full max-w-lg p-8 bg-white bg-opacity-90 rounded shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="mb-4 mt-5">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Problem Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactUs;
