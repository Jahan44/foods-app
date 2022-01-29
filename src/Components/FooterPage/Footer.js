import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-body">
      <h2>Live Haker</h2>
      <div className="footer-icon">
        <a href="https://www.facebook.com/search/top/?q=nerob%20roy%20joysen">
          <i className="fab fa-facebook fa-style"></i>
        </a>
        <a href="http://www.bpsc.gov.bd/site/view/notices/%E0%A6%A8%E0%A7%8B%E0%A6%9F%E0%A6%BF%E0%A6%B6-">
          <i className="fas fa-clinic-medical fa-style"></i>
        </a>
        <a href="https://coolors.co/palettes/trending">
          <i className="fas fa-apple-alt fa-style"></i>
        </a>
        <a href="https://www.udemy.com/topic/react-native/">
          <i className="fab fa-asymmetrik fa-style"></i>
        </a>
      </div>
      <div className="footer-list-body">
        <div className="footer-left-list">
          <ul className="footer-ul">
            <li className="ul-footer-title">Food List-1</li>
            <Link to="/list/a">
              <li>Apam balik</li>
            </Link>
            <Link to="/list/b">
              <li>BeaverTails</li>
            </Link>
            <Link to="/list/c">
              <li>Carrot Cake</li>
            </Link>
            <Link to="/list/d">
              <li>Big Mac</li>
            </Link>
            <Link to="/list/e">
              <li>Duck Confit</li>
            </Link>
          </ul>
        </div>
        <div className="footer-right-list">
          <ul className="footer-ul">
            <li className="ul-footer-title">Food List-2</li>
            <Link to="/list/f">
              <li>Poutine</li>
            </Link>
            <Link to="/list/j">
              <li>Lasagne</li>
            </Link>
            <Link to="/list/k">
              <li>Kafteji</li>
            </Link>
            <Link to="/list/l">
              <li>Pancakes</li>
            </Link>
            <Link to="/list/i">
              <li>Tourtiere</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
