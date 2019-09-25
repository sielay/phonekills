import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Reporting" />
    <h2>Reporting</h2>
    <p>
      Following guidelines are not legal advice, nor official information
      provided by the police. It is based on the feedback given by some officers
      during the cooperation with members of the public.
    </p>
    <p>
      Points below refer to reporting a driver using the handheld device while
      driving. You should use the official{" "}
      <Link to="/resources">tool/website/email</Link> to contact police.
      Guidelines may be different for other kinds of incidents. You must
      understand that if they show you committing the offence you can be
      charged.
    </p>
    <ul>
      <li>
        Provide original video from the incident, don't edit it. You can trim it
        if it's too long, but keep the original just in case.
      </li>
      <li>
        Observe and don't interact with the driver as long as possible. Ensure
        that you don't obstruct the traffic (especially other cyclists), you can
        stop on the pavement and wait for the driver to pass.
      </li>
      <li>
        The recording should show driver holding the phone and interacting with
        it (like tapping, talking to it, watching). In an ideal scenario, it
        should be visible that the screen is lit on. Be aware that reflections
        on the windows may make evidence unreadable. It has to be verified by
        people who weren't there and you need to convince them that what they
        see is the phone in use.
      </li>
      <li>
        Be aware some drivers can be aggressive or try to intimidate it. Try to
        avoid interaction or argument. Longer they don't notice you, better for
        the evidence.
      </li>
      <li>
        "For those reporting traffic offences to the Met portal, please use the
        upload facility on their form rather than YouTube or other cloud
        services. You save them quite a lot of work and thus help them to
        process more. "{" "}
        <a
          href="https://twitter.com/MikeyCycling/status/1152146324000821248"
          target="_blank"
        >
          {" "}
          source (author of quoted content by not endorse this page)
        </a>
        .
      </li>
    </ul>
    <h2>What to consider before publishing footage on the social media</h2>
    <p>
      An official response from PNLD to question about publishing video of
      drivers committing offences (Sep 13th, 2019)
    </p>
    <pre style={{
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      whiteSpace: 'pre-line'
    }}>
      Classification: OFFICIAL{"\n\n"}
      Lukasz{"\n\n"}
      Thank you for your enquiry{"\n\n"}
      We would advise against publishing an image/footage of a suspect on social
      media, as this may compromise the investigation and leave you open to
      civil action for defamation.{"\n\n"}
      It is possible for the police to publish the image in controlled
      circumstances that would achieve the same objectives. You would then be
      protected from civil action and the police publication would be monitored
      and subject to strict guidelines. This allows the police to make use of
      social media in the same way as the individual but would ensure avoidance
      of the commission of any offences under the Contempt of Court Act 1981 and
      would also avoid any conflict with the Convention rights of the suspect,
      such as a right to a fair trial should a suspect be charged with an
      offence.{"\n\n"}
      If you have footage of a traffic incident, we advise you pass this to your
      local police force. You can contact your local police force either via
      101, in person at your nearest police station or via their online
      reporting form: https://www.askthe.police.uk/content/Q727.htm{"\n\n"}
      We hope this information assists.{"\n\n"}
      Regards,{"\n"}
      PNLD{"\n"}
      (EG)
    </pre>
  </Layout>
)

export default IndexPage
