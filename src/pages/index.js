import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      According to Transport Research Laboratory (TRL) research, reaction times
      are twice as long text driving as drink driving (
      <a
        href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/568484/rrcgb-2015.pdf"
        target="_blank"
      >
        source
      </a>
      ).
    </p>
    <h3>In essence</h3>
    <ul>
      <li>
        Increase awareness of the danger of using mobile phones in the traffic.
      </li>
      <li>
        Treat drivers using mobile phones while driving like drunk drivers.
      </li>
      <li>
        Clarify what is meant by usage to prevent holding phones on laps, seats
        and make prevention and prosecution easier.
      </li>
      <li>
        Increase awareness of danger and illegality of using the phone while
        queuing and on the red lights.
      </li>
    </ul>
    <h3>Where we are?</h3>
    <ul>
      <li>
        Stage: drawing board, discussing the scope, ideas, problems,
        researching.
      </li>
      <li>
        Scale: currently a sole project of one person, open for anyone to join
        and contribute.
      </li>
    </ul>
    <h3>What next?</h3>
    <ul>
      <li>Work on shape, scope, message.</li>
      <li>Work on petition to the Parliament</li>
      <li>
        Want to help? Make a{" "}
        <a href="https://github.com/sielay/phonekills" target="_blank">
          pull request or an issue
        </a>
        !
      </li>
      <li>
        Follow us on{" "}
        <a href="https://twitter.com/phonekills" target="_blank">
          Twitter
        </a>
      </li>
    </ul>
    <h3>Few words from the initiator</h3>
    <p>
      My name is Łukasz, I'm a cyclist and live in London. Every day I commute
      to work and see loads of people focused on their phones when they drive,
      cross the street or even cycle or use an electric scooter. Most of the
      time they are either not aware of the danger or in denial. Many don't know
      it's illegal to use the phone when waiting on the lights or moving slowly
      in the traffic. Many times I have to observe (or am a likely victim) of
      narrowly avoided incidents caused by such behaviour from all kinds of road
      users. After working for a long time with Metropolitan Police I noticed
      that often their hands are bound by unclear legislation, especially when
      it comes to the definition of the phone usage. That makes very difficult
      to prevent or prosecute it.
    </p>
    <p>
      I decided to kick off that action for two reasons. First I see that I'm
      not the only one who struggles with that situation and simply want to
      arrive alive at work and at home. Secondly, I have experience of
      iniciating countrywide action in the past (in Poland, against laws
      prohibiting i.e. having an ale on the grill in the park) which by simple
      hard work, determination and support of amazing community grew to massive
      scale, changed some local laws and became a catchphrase in the Polish
      language.
    </p>
    <p>
      As much I personally prefer to treat everyone equally in the eyes of the
      law, I must agree that drivers cause the biggest threat to the vulnerable
      road users. Therefore I limit the action to focus on them. In the same
      time I'd discuss and advocate education other road users, but won't keep
      it as the priority.
    </p>
    <p>
      I initialised action on my own. It has no connection to any organisation,
      company, movement, political views, etc.
    </p>
    <p>
      Action is open for anyone to join. It presents my personal views, but I
      want it to present community views and become shared. Feel free to
      participate and shape it. We can do it.
    </p>
  </Layout>
)

export default IndexPage
