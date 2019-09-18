import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Resources" />
    <h2>Law &amp; enforcement</h2>
    <ul>
      <li>
        <a
          href="https://www.gov.uk/using-mobile-phones-when-driving-the-law"
          target="_blank"
        >
          GOV.UK: Using a phone or a sat nav when driving
        </a>
      </li>
      <li>
        <a
          href="https://www.met.police.uk/ro/report/rti/rti-a/report-a-road-traffic-incident/"
          target="_blank"
        >
          Report an Incident to Metropolitan Police
        </a>
      </li>
    </ul>
    <h2>Actions, organisations &amp; research</h2>
    <ul>
      <li>
        <a href="http://stopkillingcyclists.org" target="_blank">
          Stop Killing Cyclists
        </a>
      </li>
      <li>
        <a
          href="https://www.theaa.com/about-us/newsroom/twice-as-likely-to-crash-text-driving-as-drink-driving"
          target="_blank"
        >
          AA Trust and Think! hit cinemagoers with anti-text driving ad
        </a>
      </li>
    </ul>
    <h2>Bloggers and YouTubers</h2>
    <p>
      Those are people who create great content proving the danger of using the
      phone while driving. We do endorse their work, but it doesn't they do
      endorse our action. We want to show all support to their actions, but are
      not claiming being supported by any of them.
    </p>
    <ul>
      <li>
        <a href="https://www.youtube.com/user/4ChordsNoNet" target="_blank">
          4ChordsNoNet
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/CycleGaz" target="_blank">
          CycleGaz
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/mcrcycle" target="_blank">
          MCR Cyclist
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/CyclingMikey" target="_blank">
          CyclingMikey
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/nimenta" target="_blank">
          Silvio Diego
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCHSsIH3ktUQ7xuQ2oV1iFNw/videos"
          target="_blank"
        >
          SpaghettiCyclist
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCnKTpKt6hsZEaaT_BAYa27Q"
          target="_blank"
        >
          Northern Cyclist TVL
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCzVcSJNIGD1UaYzf1GERxuw"
          target="_blank"
        >
          SODtv
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/lukaszsielski" target="_blank">
          sielay cycles
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
