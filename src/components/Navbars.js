import React from "react";
import navbarItems from "./Navbaritems";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbars = ({ toggle }) => {
  return (
    <nav>
      <Link to="/" className="link">
        <span className="nav-title">
            <svg
              width="50"
              height="37"
              viewBox="0 0 80 47"
            >
              <defs>
                <linearGradient
                  id="z4eyuqnvva"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#EAA921" />
                  <stop offset="100%" stop-color="#EC6523" />
                </linearGradient>
                <linearGradient
                  id="4wsmtz1sxc"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#E9A821" />
                  <stop offset="100%" stop-color="#EB6623" />
                </linearGradient>
                <path
                  id="v00ocfy0vb"
                  d="M23.065.18C10.795.18.452 9.778.037 21.923c-.02.638-.02 2.552-.02 2.552h6.59c.582 8.614 7.723 15.421 16.454 15.421 9.11 0 16.496-7.412 16.496-16.555h3.956v.003c0 11.334-9.155 20.522-20.448 20.522-4.98 0-9.54-1.792-13.085-4.763.074-.25.116-.516.116-.79 0-1.528-1.234-2.766-2.755-2.766-1.522 0-2.755 1.238-2.755 2.765 0 1.527 1.233 2.765 2.755 2.765.263 0 .516-.039.757-.108 4.03 3.451 9.254 5.538 14.967 5.538 12.746 0 23.08-10.37 23.08-23.163v-2.556h-6.783C38.139 12.856 31.307 6.784 23.06 6.784c-8.634 0-15.715 6.659-16.432 15.138H2.672c.728-10.67 9.576-19.1 20.393-19.1 4.555 0 8.759 1.498 12.158 4.025-.087.269-.135.555-.135.853 0 1.527 1.233 2.765 2.755 2.765 1.521 0 2.755-1.238 2.755-2.765 0-1.527-1.234-2.765-2.755-2.765-.231 0-.454.031-.669.085C33.272 1.99 28.38.18 23.064.18zM9.194 23.34c0-7.686 6.209-13.917 13.867-13.917 7.659 0 13.867 6.23 13.867 13.917 0 7.686-6.208 13.916-13.867 13.916-7.658 0-13.867-6.23-13.867-13.916z"
                />
              </defs>
              <g fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    
                    <g>
                      <path
                        fill="url(#z4eyuqnvva)"
                        d="M5.141 3.151L10.533 12.525 15.926 3.151z"
                        transform="translate(-35.000000, -12.000000) translate(35.000000, 12.000000) translate(31.373769, 16.910416)"
                      />
                      <path
                        fill="#FBAE17"
                        d="M10.244 14.413L3.356 2.44 0 .518 10.243 18.323zM.264 0L3.68 1.956 17.362 1.956 20.778 0zM17.723 2.419L10.823 14.412 10.822 18.326 21.078.497z"
                        transform="translate(-35.000000, -12.000000) translate(35.000000, 12.000000) translate(31.373769, 16.910416)"
                      />
                    </g>
                    <g transform="translate(-35.000000, -12.000000) translate(35.000000, 12.000000) translate(18.825675, 0.109871)">
                      <mask id="phapp60n4d" fill="#fff">
                        <use href="#v00ocfy0vb" />
                      </mask>
                      <path
                        fill="url(#4wsmtz1sxc)"
                        d="M23.065.18C10.795.18.452 9.778.037 21.923c-.02.638-.02 2.552-.02 2.552h6.59c.582 8.614 7.723 15.421 16.454 15.421 9.11 0 16.496-7.412 16.496-16.555h3.956v.003c0 11.334-9.155 20.522-20.448 20.522-4.98 0-9.54-1.792-13.085-4.763.074-.25.116-.516.116-.79 0-1.528-1.234-2.766-2.755-2.766-1.522 0-2.755 1.238-2.755 2.765 0 1.527 1.233 2.765 2.755 2.765.263 0 .516-.039.757-.108 4.03 3.451 9.254 5.538 14.967 5.538 12.746 0 23.08-10.37 23.08-23.163v-2.556h-6.783C38.139 12.856 31.307 6.784 23.06 6.784c-8.634 0-15.715 6.659-16.432 15.138H2.672c.728-10.67 9.576-19.1 20.393-19.1 4.555 0 8.759 1.498 12.158 4.025-.087.269-.135.555-.135.853 0 1.527 1.233 2.765 2.755 2.765 1.521 0 2.755-1.238 2.755-2.765 0-1.527-1.234-2.765-2.755-2.765-.231 0-.454.031-.669.085C33.272 1.99 28.38.18 23.064.18zM9.194 23.34c0-7.686 6.209-13.917 13.867-13.917 7.659 0 13.867 6.23 13.867 13.917 0 7.686-6.208 13.916-13.867 13.916-7.658 0-13.867-6.23-13.867-13.916z"
                        mask="url(#phapp60n4d)"
                      />
                    </g>
                    <g fill="#FFF">
                      
                    </g>
                  </g>
                </g>
              </g>
            </svg>
        </span>
      </Link>
      <div className="menu-items">
        {navbarItems.map((item, index) => (
          <a
            className="link"
            key={index}
            href="https://www.twitter.com/FemiObadimu3"
            rel="noreferrer"
            target="_blank"
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="icons">
        <a
          href="https://github.com/FemiObadimu"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="github-icon icon-tabler icon-tabler-brand-github"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>

        <div className="mobile-menu-icon">
          <FontAwesomeIcon icon={faBars} onClick={toggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
