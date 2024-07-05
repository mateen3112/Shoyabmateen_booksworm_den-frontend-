// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: 'J.K. Rowling',
    book: 'Harry Potter and the Sorcerer\'s Stone',
    genre: 'Fantasy',
    testimonial: 'A magical journey that captivates readers of all ages.',
  },
  {
    name: 'Agatha Christie',
    book: 'Murder on the Orient Express',
    genre: 'Mystery',
    testimonial: 'A classic whodunit that keeps you guessing until the very end.',
  },
  {
    name: 'Stephen King',
    book: 'The Shining',
    genre: 'Thriller',
    testimonial: 'A chilling tale of horror and suspense that haunts your dreams.',
  },
  {
    name: 'Neil Gaiman',
    book: 'American Gods',
    genre: 'Fantasy',
    testimonial: 'A masterful blend of myth and modern storytelling.',
  },
];

const Testimonials = () => {
  return (
    <div className=" text-blue-dark py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Author Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-purple-light text-lg italic mb-4">"{testimonial.book}" - {testimonial.genre}</p>
              <p className="text-blue-light">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
