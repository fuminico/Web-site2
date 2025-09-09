
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} 未来創研株式会社. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
