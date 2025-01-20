import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10 mt-40">
      {/* Newsletter Section */}
      <div className="-mt-32">
      <div className= "  max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500 to-yellow-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
        <p className="text-sm mt-2">
          Get the latest updates and news right in your inbox!
        </p>
        <form className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-r-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left px-6">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-sm mt-2">
            We are passionate in providing the best services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold">Subscribe</h3>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-lg focus:outline-none text-black"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 w-full mt-2 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; 2025 Your Company | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
