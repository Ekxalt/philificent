import * as React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"


const PrivacyPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Philificent.com</title>
        <meta name="description"
              content="You have an expected right to privacy, this page outlines how we protect and encourage those rights."/>
      </Helmet>
      <section className="flex flex-col min-h-full pb-8">
        <h1 className="text-3xl mb-4">
          Privacy Policy
        </h1>
        <p className="mb-4">We value your privacy, as such we currently do not track anything you are doing</p>
        <p className="mb-4">As such, you will need to contact us if something isn't working</p>
        <h2 className={"text-2xl mb-4"}>Cookies, Browser Storage, etc</h2>
        <p className="mb-4">
          We do use modern features of your web browser to provide an offline version of the site,
          as well as caching site data so that our site can load as fast as possible, and save you
          from spending money re-downloading assets and files that have not changed.
        </p>

        <h2 className={"text-2xl mb-4"}>Notice of Rights</h2>
        <p className="mb-4">
          We maintain the right to change this notice, page, site, logo, et al at any time without
          the need to personally notify you of these changes.
        </p>
        <p className="mb-4">
          By using our site, you agree to all terms in perpetuity and waive rights to attempt
          to harm, discredit, defame, cancel, and even being a jerk.
        </p>

        <h3 className={"text-2xl mb-4"}>Your California Rights</h3>
        <p className="mb-4">
          You have the right to move away from California, we will not take that right from you.
          We hear that Texas and Florida are pretty hot options right now, but if you enjoy coast-life
          thinking, perhaps Oregon or Washington would be a better choice.
        </p>
        <p className="mb-4">
          You also have the right to not use the internet, a browser, or even use your real name
          on many websites. You can also use a VPN and trick other sites into thinking that you
          are located in a region that is not California. The internet is awesome, we expect you
          to keep it that way.
        </p>

        <h3 className={"text-2xl mb-4"}>Opt-out</h3>
        <p className={"mb-4"}>
          We have gone to great lengths to make opting out of anything on our site as easy as possible.
          Please perform the following steps to complete your opt-out experience:
        </p>
        <ul className={"list-disc list-inside"}>
          <li>Visitors on browsers running on Windows: Press ctrl+w</li>
          <li>Visitors on browsers running on macOS: Press command+w</li>
          <li>Visitors on a mobile device or browser, close the window or tap on your location bar and type "duckduckgo.com" and press go or equivalent button</li>
        </ul>
        <p>
          After you have followed the above steps, do not visit again. Since opting out is your choice, you are
          responsible for keeping yourself opted out by not returning to visit. Yay for personal accountability!
        </p>

        {/*<h2 className={"text-2xl mb-4"}>Contact Us</h2>*/}
        {/*<p className="mb-4">...</p>*/}
      </section>
    </Layout>
  )
}

export default PrivacyPage
