import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

import { FaEdit, FaCalendarAlt, FaSun, FaClock, FaQuestionCircle, FaHandHoldingUsd } from "react-icons/fa";

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
    note: "on our majestic campus in houston"
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});

const cards = [
  {
    icon: <FaClock size="0.9em" />,
    title: "Schedule",
    href: "",
    text: "Find out when hacking begins and ends, and more →"
  },
  {
    icon: <FaQuestionCircle size="0.9em" />,
    title: "FAQs",
    href: "",
    text: "First timer? Most of your inquiries are answered →"
  },
  {
    icon: <FaHandHoldingUsd size="0.9em" />,
    title: "Sponsors",
    href: "../static/sponsors.pdf",
    text: "Want to recruit and mentor our hackers? View our tiers →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

const friday = [
  {
    time: "4:30 PM",
    title: "Early Registration",
    detail: "Registration begins for Rice students.",
  },
  {
    time: "5:00 – 6:30 PM",
    title: "Hacker Registration",
    detail: "Come to the Grand Hall to check into the event.",
  },
  {
    time: "5:00 – 7:00 PM",
    title: "Sponsor Setup",
    detail: "Sponsors will register & set up their tables.",
  },
  {
    time: "7:00 PM",
    title: "Opening Ceremonies",
    detail: "Description goes here.",
  },
  {
    time: "7:30 PM",
    title: "Dinner & Form Teams",
    detail: "Description goes here.",
  },
  {
    time: "8:00 PM",
    title: "Hacking Begins!",
    detail: "Description goes here.",
  },
  {
    time: "11:00 PM",
    title: "Late Night...",
    detail: "Description goes here.",
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

const saturday = [
  {
    time: "9:00 AM",
    title: "Breakfast",
    detail: "Description goes here.",
  },
  {
    time: "12:00 PM",
    title: "Lunch",
    detail: "Description goes here.",
  },
  {
    time: "8:00 PM",
    title: "Dinner",
    detail: "Description goes here.",
  },
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

const sunday = [
  {
    time: "8:30 AM",
    title: "Judges Arrive",
    detail: "Description goes here.",
  },
  {
    time: "9:00 AM",
    title: "Hacking Ends!",
    detail: "Description goes here.",
  },
  {
    time: "9:30 AM",
    title: "Judging Begins",
    detail: "Description goes here.",
  },
  {
    time: "11:00 AM",
    title: "Brunch",
    detail: "Description goes here.",
  },
  {
    time: "1:00 PM",
    title: "Closing Ceremony",
    detail: "Description goes here.",
  },
  {
    time: "2:00 PM",
    title: "Finale!",
    detail: "Description goes here.",
  },
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

const Home = () => (
  <div>
    <img className="mlh" width="90" src="../static/mlh.svg" />
    <Head title="HackRice 8" />
    <Nav />
    <div className="container">
      <div className="hero">
        <h1 className="title">the premier hackathon of the south</h1>
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
        </p>
        <div className="row short" style={{ "margin": "50px 0px" }}>
          {cards.map(({ key, href, title, text, icon }) => (
            <>
              <Link href={href}>
                <a className="card">
                  <h3>
                    <span className="icon">{icon}</span>
                    <span className="spacer" />
                    <span className="card-title">{title}</span>
                  </h3>
                  <p>{text}</p>
                </a>
              </Link>
            </>
          ))}
        </div>
        <div className="row full white" style={{ "marginTop": "30px" }}>
          <div className="row">
            <h1>Schedule</h1>
          </div>
          <div className="row">
            <div className="col-3">
              <h2>Friday</h2>
              <ul className="schedule-day">
                {friday.map(({ key, title, time, detail }) => (
                  <li className="schedule-item">
                    <span className="item-time">{time}</span>
                    <span className="item-title">{title}</span>
                    <span className="item-detail">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-3">
              <h2>Saturday</h2>
              <ul className="schedule-day">
                {saturday.map(({ key, title, time, detail }) => (
                  <li className="schedule-item">
                    <span className="item-time">{time}</span>
                    <span className="item-title">{title}</span>
                    <span className="item-detail">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-3">
              <h2>Sunday</h2>
              <ul className="schedule-day">
                {sunday.map(({ key, title, time, detail }) => (
                  <li className="schedule-item">
                    <span className="item-time">{time}</span>
                    <span className="item-title">{title}</span>
                    <span className="item-detail">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
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

      h3 {
        line-height: 1.3em;
      }

      p {
        font-family: "Inter UI";
        line-height: 1.5em;
        font-size: 1.2em;
      }

      a:hover {
        color: unset;
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
        position: fixed;
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
        overflow: visible;
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
        width: auto;
        margin: 0px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }

      .row.short {
        max-width: 750px;
      }

      .col-3 {
        width: 33%;
      }

      .row.full {
        max-width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        padding: 0% 7%;
      }

      .white {
        background: #fff;
        color: #fff;
      }

      .white > * {
        color: #6164B2;
      }

      .white h1 {
        border: 1px solid #6164B2;
        padding: 6px 10px;
        margin-top: 1em;
        font-size: 1.6em;
      }

      .white h2 {
        font-family: 'Inter UI';
        text-transform: uppercase;
      }

      .card {
        padding: 18px 18px 24px;
        width: 190px;
        text-align: left;
        text-decoration: none;
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.3);
        transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out;
      }

      .card-title {
        text-transform: uppercase;
      }

      .card:hover {
        border-color: #e0e5ff;
        background: rgba(255, 255, 255, 0.05);
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

      .row > .row {
        width: 100%;
      }

      .schedule-day {
        display: inline-block;
        vertical-align: top;
        width: 48%;
        float: left;
        margin: 0px;
      }

      .schedule-day {
        list-style-type: none;
        padding: 0;
        width: 90%;
      }

      .schedule-item {
        border: 1px solid rgba(97, 100, 178, 0.2);
        border-left: 6px solid rgba(97, 100, 178, 0.2);
        padding: 8px 10px;
        transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        margin-bottom: 1em;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
      }

      .schedule-item:hover {
        box-shadow: 1px 2px 10px 2px rgba(97, 100, 178, 0.15);
        transform: translateY(-5px);
      }

      .schedule-day ul li {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        align-content: center;
      }

      .item-time {
        flex: 1 1 auto;
        float: right;
        display: block;
        margin-top: 2px;
        font-family: 'Overpass Mono';
      }

      .item-title {
        margin-top: 5px;
        display: inline-block;
        font-size: 1em;
        font-weight: 400;
        font-family: 'Overpass Mono';
        background: rgba(97, 100, 178, 0.1);
        padding: 2px 5px;
      }

      .item-detail {
        display: block;
        opacity: 0.7;
        margin-top: 0.5em;
        font-size: 0.9em;
        clear: both;
      }

    `}</style>
  </div>
);

export default Home;
