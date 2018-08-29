import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaMedium, FaTwitter, FaAt, FaCodepen } from 'react-icons/fa';


const links = [
  { href: 'https://facebook.com/hackrice', label: 'Facebook', icon: <FaFacebook size='1.5em' /> },
  { href: 'https://medium.com/@hackrice', label: 'Medium', icon: <FaMedium size='1.5em' />  },
  { href: 'https://twitter.com/hackingrice', label: 'Twitter', icon: <FaTwitter size='1.5em' /> },
  { href: 'mailto:officialhackrice@gmail.com', label: `Email`, icon: <FaAt size='1.5em' /> },
  { href: 'https://hackrice8.devpost.com/', label: 'Devpost', icon: <FaCodepen size='1.5em' /> },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <img src='../static/hr8.svg' height={100} />
      </li>
      <ul>
        {links.map(({ key, href, label, icon }) => (
          <li key={key}>
            <Link href={href}>
              <a><span className="icon">{icon}</span></a>
            </Link>
          </li>
        ))}
      </ul>
      <ul></ul>
    </ul>

    <style jsx>{`
      :global(body) {
        background-color: #6164B2;
        color: #fff;
        font-family: 'Open Sans';
        margin: 5%;
      }

      nav {
        text-align: center;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      nav > ul {
        padding: 4px 16px;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      a {
        color: #fff;
        font-family: 'Overpass Mono';
        font-size: 0.9em !important;
        font-weight: 300;
        text-decoration: none;
        text-transform: uppercase;
      }

      .icon {
        padding: 2px 5px;
      }

      .logo {
        font-family: 'Overpass Mono';
        font-size: 2rem;
        text-transform: uppercase;
      }
    `}</style>
  </nav>
)

export default Nav
