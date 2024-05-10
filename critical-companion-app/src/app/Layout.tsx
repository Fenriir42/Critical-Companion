// Layout.tsx

import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
