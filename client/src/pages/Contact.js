import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>

      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-[35vh] relative">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          alt="restaurant"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-600 mb-6">
            If you have any questions, feedback, or booking inquiries,
            feel free to contact us. Our team will respond as soon as possible.
          </p>

          <div className="space-y-4">

            <p>
              📍 <span className="font-semibold">Address:</span>  
              Main Market, City Center
            </p>

            <p>
              📞 <span className="font-semibold">Phone:</span>  
              +91 9876543210
            </p>

            <p>
              ✉ <span className="font-semibold">Email:</span>  
              foodies@email.com
            </p>

            <p>
              ⏰ <span className="font-semibold">Opening Hours:</span>  
              10:00 AM - 11:00 PM
            </p>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border p-3 rounded"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Location
        </h2>

        <div className="w-full h-[350px]">

          <iframe
            title="restaurant location"
            src="https://www.google.com/maps?q=restaurant&output=embed"
            className="w-full h-full border-0 rounded-lg"
          ></iframe>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;