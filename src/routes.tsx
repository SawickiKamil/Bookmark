import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import FeaturesPage from 'views/featuresPage'
import ContactPage from 'views/contactPage'
import PricingPage from 'views/pricingPage'
import Navbar from 'components/navbar'
import Modal from 'components/modal'
import Footer from 'components/footer'

function Routes() {
  return (
    <>
      <Navbar />
      <Modal />
      <Switch>
        <Route exact path="/" component={FeaturesPage} />
        <Route exact path="/pricing" component={PricingPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default Routes
