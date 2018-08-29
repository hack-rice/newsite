import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

import { FaEdit, FaCalendarAlt, FaSun } from "react-icons/fa";

const bullets = [
  {
    icon: <FaEdit />,
    button: "apply now",
    href: "",
    note: "out-of-rice applications have closed!"
  },
  {
    icon: <FaCalendarAlt />,
    button: "september 14–16, 2018",
    href: "",
    note: "36 hours of non-stop building"
  },
  {
    icon: <FaSun />,
    button: "held @ rice memorial center",
    href: "",
    note: "on our majestic campus in houston, texas"
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});

const Home = () => (
  <div>
    <img className="mlh" width="70" src="../static/mlh.svg" />
    <Head title="HackRice 8" />
    <Nav />
    <div className="container">
      <div className="hero">
        <h1 className="title">
          the premier hackathon of the south
        </h1>
        <p className="description">
          {bullets.map(({ key, href, button, note, icon }) => (
            <>
              <span className="icon">{icon}</span>
              <a href={href} className="styledlink">
                {button}
              </a>
              <span className="spacer" />
              <span className="note">{note}</span>
              <br />
            </>
          ))}
          <br />
        </p>

        {/* <div className="row">
          <Link href="https://github.com/zeit/next.js#getting-started">
            <a className="card">
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next on Github and in their examples</p>
            </a>
          </Link>
          <Link href="https://open.segment.com/create-next-app">
            <a className="card">
              <h3>Examples &rarr;</h3>
              <p>
                Find other example boilerplates on the{' '}
                <code>create-next-app</code> site
              </p>
            </a>
          </Link>
          <Link href="https://github.com/segmentio/create-next-app">
            <a className="card">
              <h3>Create Next App &rarr;</h3>
              <p>Was this tool helpful? Let us know how we can improve it</p>
            </a>
          </Link>
        </div> */}
      </div>
      <img className="owl" width="200" src="../static/owl.svg" />
      <img className="sally" width="50%" src="../static/sallyport.svg" />
    </div>

    <style jsx>{`
      @import url("https://rsms.me/inter/inter-ui.css");

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Overpass Mono" !important;
      }

      a.styledlink {
        color: #fff;
        font-family: "Overpass Mono" !important;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.1);
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        padding: 3px 5px;
        margin: 3px;
        text-transform: uppercase;
        font-size: 0.85em;
        font-weight: 500;
      }

      a.styledlink:hover {
        color: #6164b2;
        background: rgba(255, 255, 255, 1);
      }

      .mlh {
        position: absolute;
        left: 80%;
        top: 0%;
      }

      .sally {
        position: absolute;
        bottom: 0;
        left: 10%;
      }

      .owl {
        position: absolute;
        top: 30%;
        right: 0%;
      }

      .container {
        font-family: "Open Sans";
        margin-left: 2%;
        margin-right: 2%;
      }

      .note {
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 300;
        font-family: "Overpass Mono";
      }

      .icon {
        margin-right: 5px;
      }

      .spacer {
        margin-right: 5px;
      }

      .spacer-xl {
        margin-right: 12px;
      }

      .hero {
        width: 100%;
        color: #fff;
      }

      .description {
        width: 75%;
        font-size: 1.2em;
        font-weight: 300;
        line-height: 2em;
      }

      code {
        background: rgba(255, 255, 255, 0.1);
        padding: 3px 5px;
        font-family: "Overpass Mono";
        font-size: 0.9em;
      }

      .title {
        margin: 0;
        width: 100%;
        padding-top: 50px;
        line-height: 1.15;
        font-size: 1.8em;
        font-weight: bold;
        text-transform: uppercase;
      }

      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #fff;
        border: 1px solid #fff;
      }

      .card:hover {
        border-color: #067df7;
      }

      .card h3 {
        margin: 0;
        font-size: 18px;
      }

      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
      }
    `}</style>
  </div>
);

export default Home;
