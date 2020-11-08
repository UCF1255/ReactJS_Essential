import React from "react";
// default valu provided for book component

const Book = ({ title="Its me", author="Its again me", pages=0, freebookmark }) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by:{author}</p>
        <p>Pages:{pages}</p>
        <p>Free Bookmark:{freebookmark ? "yes" : "no"}</p>
      </section>
    );
  };
export default Book