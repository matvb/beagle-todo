import React from 'react';

function Footer(props) {
  return (
      <section className="footer">
        <p className="credits">by: <b>{props.author}</b></p>
      </section>
  );
}

export default Footer;