import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Team Soil Souls. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:underline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
