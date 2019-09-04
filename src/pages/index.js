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
    <h3>We suggest</h3>
    <ul>
      <li>
        Increase penalty for using mobile devices while driving
        <ul>
          <li>
            At the moment driver can get £200 fine and 6 penalty points. New
            drivers can lose their licence. Many end up by taking retraining
            course.
          </li>
          <li>
            Drivers using mobile devices while driving should lose driving
            licence same as drink drivers, always.
          </li>
          <li>
            Drivers/cyclists/bikers not having driving licence or foreign
            drivers who cannot get their licence taken should be fined with much
            higher rates to prevent the offence.
          </li>
        </ul>
      </li>
      <li>
        Clarify what using mobile device while driving means
        <ul>
          <li>
            Currently the law states: "It’s illegal to hold a phone or sat nav
            while driving or riding a motorcycle. You must have hands-free
            access"
          </li>
          <li>
            Many drivers are not aware that the law also states: "The law still
            applies to you if you’re: stopped at traffic lights, queuing in
            traffic, supervising a learner driver"
          </li>
          <li>
            Many drivers walk around the phasing by holding the phone on the
            lap, seat, arm rest, or scrolling news/social feeds when phone is in
            the cradle.
          </li>
          <li>
            Many drivers are not prosecuted, when they hold the phone, but
            screen is not lighten up or evidence doesn't capture their finger
            movement.
          </li>
          <li>
            We suggest that it's clear that phone has to be hidden of the driver
            sight or in the cradle, can be interacted only via hand-free methods
            or built in car controls and can't be used to broadcast feeds,
            videos, documents, news, etc. except maps for navigation.
          </li>
        </ul>
      </li>
      <li>
        Abolish using mobile device while cycling
        <ul>
          <li>
            Currently it's not illegal to cycle while holding, using the phone,
            texting or calling.
          </li>
          <li>
            Usage of the phone on the bicycles should be regulated in the same
            way as for the cars.
          </li>
        </ul>
      </li>
      <li>
        Abolish crossing the street by pedestrians while using mobile device
        <ul>
          <li>Jaywalking is not illegal at the moment in the UK</li>
          <li>
            It happens on daily basis that pedestrians cross the street without
            watching and got hit by cars or cyclists.
          </li>
          <li>
            It happens that drivers or cyclist who had no chance to avoid
            collision are fined or sued by pedestrians who were focused on their
            phones while crossing the street.
          </li>
        </ul>
      </li>
    </ul>
    <h3>What next?</h3>
    <ul>
      <li>We work on petition to the Parliament</li>
      <li>Want to help? Make a <a href="https://github.com/sielay/phonekills" target="_blank">pull request or an issue</a>!</li>
      <li>
        Follow us on{" "}
        <a href="https://twitter.com/phonekills" target="_blank">
          Twitter
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
