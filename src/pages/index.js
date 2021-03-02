import * as React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Header from "../components/header"
import Title from "../components/title"
import Meta from "../components/meta"

const IndexPage = () => {
  return (
    <Layout>
      {/*<Helmet>*/}
      {/*  <meta name="description" content="The life and times of Phil, his 2-cents, and the handiwork that names him Philificent" />*/}
      {/*</Helmet>*/}
      <Meta metaName={"description"} metaContent={"The life and times of Phil, his 2-cents, and the handiwork that names him Philificent"} />
      <Title titleText='Home' />

      <Header />

      <section className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl mb-4">
          Philficent.com
        </h1>
        <p>For all the things!.. soon. probably.</p>
      </section>

      <Footer />

    </Layout>
  )
}

export default IndexPage
