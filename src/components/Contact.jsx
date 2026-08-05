import React, { useState } from "react";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto p-6 mt-10 rounded-2xl bg-slate-200 shadow">
      <h1 className="text-5xl text-black font-germania font-bold text-center mb-8 underline">Let's Work Together</h1>

      <form className="space-y-6">
        {/* First + Last Name in a row */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="firstName" className="block font-medium text-lg">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full p-2 border border-x-0"
              placeholder='Ram Bahadur'
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border border-x-0"
            placeholder="bahadur@gmail.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-medium text-lg">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-2 border border-x-0"
            placeholder="Can we work together in Health care project?"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#1E52B3] text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>

    
  );
};

export default Contact;
