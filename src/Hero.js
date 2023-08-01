import React from "react";

const Hero = ({ handleLogout, emailName }) => {
  return (
    <section className="hero">
      <nav>
        <h2>welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};
export default Hero;
