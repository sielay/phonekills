import React from "react"
import Cookies from "universal-cookie"

const cookies = new Cookies()
const googleAnalyticsCookieName = "gatsby-gdpr-google-analytics"
const values = ["true", "false"]

const hasCookieOnInit = values.includes(cookies.get(googleAnalyticsCookieName))

const buttonStyle = {
  marginRight: "10px",
}

const GDPROverlay = ({ onClick }) => (
  <div
    style={{
      position: "fixed",
      bottom: "0px",
      width: "100%",
      left: "0px",
      backgroundColor: "black",
      color: "white",
    }}
  >
    <div
      style={{
        maxWidth: "960px",
        margin: "0px auto",
        padding: "10px 0",
      }}
    >
      <p>
        This page would like to use Google Analytics to track the traffic. We
        use it in anonymous mode and are interested in volume, not your details.
        Would you agree us to enable this tracking and store relevant cookies on
        your browser?
      </p>
      <button style={buttonStyle} onClick={() => onClick("true")}>
        Yes, fine
      </button>
      <button style={buttonStyle} onClick={() => onClick("false")}>
        No!
      </button>
    </div>
  </div>
)

class GDPR extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      hasCookie: hasCookieOnInit,
    }
  }
  onClick(value) {
    this.setState(() => ({
      hasCookie: true,
    }))
    cookies.set(googleAnalyticsCookieName, value)
    value === "true" &&
      setTimeout(() => {
        window.location.reload()
      })
  }
  render() {
    const { hasCookie } = this.state
    return !hasCookie && <GDPROverlay onClick={this.onClick} />
  }
}

export default GDPR
