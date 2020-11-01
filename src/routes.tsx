import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import FeaturesPage from 'views/featuresPage'
import ContactPage from 'views/contactPage'
import PricingPage from 'views/pricingPage'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={FeaturesPage} />
      <Route exact path="/pricing" component={PricingPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  )
}

export default Routes
