import React from "react";

var FontAwesome = require("react-fontawesome");

function Footer() {
  // SHOW ALWAYS
  return (
    <div className="pb-4 text-center">
      <div className="mx-2 pt-5">Life is short. Eat good.</div>
      <div className="fade-half pt-3">
        <FontAwesome
          className="fab fa-facebook fa-2x mx-3"
          style={{ cursor: "pointer" }}
        />
        <FontAwesome
          className="fab fa-twitter fa-2x mx-3"
          style={{ cursor: "pointer" }}
        />
        <FontAwesome
          className="fab fa-instagram fa-2x mx-3"
          style={{ cursor: "pointer" }}
        />
        <FontAwesome
          className="fab fa-github fa-2x mx-3"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://github.com/gdevany/recipesReact",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
