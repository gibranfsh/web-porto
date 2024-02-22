"use client";
import React, { useState } from "react";

const HitMeUpSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can implement your logic to handle the form submission, like sending an email or storing the message in a database
    console.log("Form submitted!");
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-3xl font-extrabold text-center mb-8">
        Hit Me Up
      </h2>
      {submitted ? (
        <p className="text-center text-gray-300">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-800 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="bg-gray-800 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default HitMeUpSection;
