import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Restaurant Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Foodies
          </h2>
          <p className="text-sm">
            Foodies Restaurant offers delicious meals made with fresh
            ingredients. Enjoy a cozy atmosphere with family and friends.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">Table Booking</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <p>📍 Main Market, City Center</p>
          <p>📞 +91 9876543210</p>
          <p>✉ foodies@email.com</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Opening Hours
          </h3>

          <p>Mon - Fri : 10 AM - 10 PM</p>
          <p>Sat - Sun : 11 AM - 11 PM</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">

            <span className="cursor-pointer hover:text-white">🌐</span>
            <span className="cursor-pointer hover:text-white">📘</span>
            <span className="cursor-pointer hover:text-white">📸</span>
            <span className="cursor-pointer hover:text-white">🐦</span>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Foodies Restaurant. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;