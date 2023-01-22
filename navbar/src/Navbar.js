import React, { useState, useRef, useEffect } from "react";
import logo from "./logo-no-bg.png";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (show) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = `0px`;
    }
    console.log(linksHeight);
  }, [show]);
  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" />
        <button className="nav-toggle" onClick={() => setShow(!show)}>
          <FaBars />
        </button>
      </div>
      <div className={`links-container`} ref={linksContainer}>
        <ul className="links" ref={linksRef}>
          {links.map((item, idx) => {
            const { id, url, text } = item;
            return (
              <li key={idx}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((item, idx) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}> {icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
