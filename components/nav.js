import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'mailto:officialhackrice@gmail.com', label: 'Email' },
  { href: 'https://facebook.com/hackrice', label: 'Facebook' },
  { href: 'https://medium.com/@hackrice', label: 'Medium' },
  { href: 'https://twitter.com/hackingrice', label: 'Twitter' },
  { href: 'https://hackrice8.devpost.com/', label: 'Devpost' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        HackRice 8
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background-color: #6164B2;
      }

      nav {
        text-align: center;
      }

      ul {
        display: flex;
        justify-content: space-around;
      }

      nav > ul {
        padding: 4px 16px;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
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
