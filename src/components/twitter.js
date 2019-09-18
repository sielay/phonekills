import * as React from "react"

const waitForTwitter = (callback) => {
  const twttr = window["twttr"] || undefined;
  if (typeof twttr === "undefined") {
    return setTimeout(() => waitForTwitter(callback), 500);
  }
  callback(twttr);
}

export default class Twitter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialized: false,
    }
  }

  componentDidMount() {

    const { tweet } = this.props

    if (this.state.initialized) {
      return
    }

    /* tslint:disable:no-string-literal */
    const twttr = window["twttr"] || undefined
    /* tslint:enable:no-string-literal */

    if (typeof twttr === "undefined") {
      const twittertimeline = this.node
      const twitterscript = document.createElement("script")
      twitterscript.src = "//platform.twitter.com/widgets.js"
      twitterscript.async = true
      twitterscript.id = "twitter-wjs"
      twittertimeline.parentNode.appendChild(twitterscript)
    } else {
      twttr.widgets.load()
    }

    if (tweet) {
      waitForTwitter((twttr) => {
        twttr.widgets.createTweet(tweet, this.node, {
          theme: 'light'
        });
      });
    }

    this.setState({ initialized: true })
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { account, tweet } = this.props
    if (tweet) {
      return <div tweetID={tweet} ref={node => (this.node = node)} />
    }
    return [
      <a
        className="twitter-timeline"
        data-tweet-limit="5"
        href={`https://twitter.com/${account.toLowerCase()}?ref_src=twsrc%5Etfw`}
        ref={node => (this.node = node)}
      >
        Tweets by @{account}
      </a>,
    ]
  }
}
