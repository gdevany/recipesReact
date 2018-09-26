import React from "react";

function Footer() {
  // SHOW ALWAYS
  return (
    <div className="padbottom2 text-center">
      <div className="padsides padtop2">Life is short. Eat good.</div>
      <div className="fade-half">
        <i
          className="fa fa-facebook fa-2x padsides padtop2"
          style={{ cursor: "pointer" }}
        />
        <i
          className="fa fa-twitter fa-2x padsides padtop2"
          style={{ cursor: "pointer" }}
        />
        <i
          className="fa fa-instagram fa-2x padsides padtop2"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Footer;
