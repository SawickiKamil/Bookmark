import * as React from 'react'
import NavBar from 'components/navbar'
import Footer from 'components/footer'
import BuildSection from 'components/buildSection'
import Modal from 'components/modal'

const PricingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Modal />
      <BuildSection name="Pricing" />
      <Footer />
    </>
  )
}

export default PricingPage
