// components/Section.jsx
import React from "react";

const LayoutSection = ({ children, className = "" }) => (
  <section className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export default LayoutSection;
