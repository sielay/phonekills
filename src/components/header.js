import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const navStyles = {
  color: `white`,
  textDecoration: `none`,
  listStyle: `none`,
  display: `inline-block`,
  float: `left`,
  padding: '0px 1rem 1rem 0px'
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 2rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul
        style={{
          listStyle: "none",
          margin: "0px",
        }}
      >
        <li>
          <Link to="/" style={navStyles}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/resources" style={navStyles}>
            Resources
          </Link>
        </li>
        <li>
          <Link to="/stats" style={navStyles}>
            Stats
          </Link>
        </li>
        <li>
          <Link to="/reporting" style={navStyles}>
            Reporting
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
