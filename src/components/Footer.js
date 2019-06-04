import React from "react";

function Footer() {
  // SHOW ALWAYS
  return (
    <div className="pb-4 text-center">
      <div className="padsides pt-3">Life is short. Eat good.</div>
      <div className="fade-half">
        <i
          className="fa fa-facebook fa-2x mx-3 pt-3"
          style={{ cursor: "pointer" }}
        />
        <i
          className="fa fa-twitter fa-2x mx-3 pt-3"
          style={{ cursor: "pointer" }}
        />
        <i
          className="fa fa-instagram fa-2x mx-3 pt-3"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Footer;
