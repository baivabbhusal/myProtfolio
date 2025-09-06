import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto p-6 mt-10 rounded-2xl shadow">
      <h1 className="text-5xl text-[#A50044] font-bold text-center mb-8">Contact Me</h1>

      <form className="space-y-6">
        {/* First + Last Name in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block font-medium text-lg">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block font-medium text-lg">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2"
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
            className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2"
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
            className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
