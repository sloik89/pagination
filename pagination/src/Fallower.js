import React from "react";

const Fallower = ({ id, avatar_url, html_url, login }) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h3>{login}</h3>
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Fallower;
