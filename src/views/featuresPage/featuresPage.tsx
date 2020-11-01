import * as React from 'react'
import ContactUsSection from 'components/contactUsSection'
import NavBar from 'components/navbar'
import Footer from 'components/footer'
import FaqSection from 'components/faqSection'
import ExtensionSection from 'components/extensionSection/extensionSection'
import ServicesSection from 'components/featureSection'
import HeroSection from 'components/heroSection'
import Modal from 'components/modal'

const FeaturesPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Modal />
      <HeroSection />
      <ServicesSection />
      <ExtensionSection />
      <FaqSection />
      <ContactUsSection />
      <Footer />
    </>
  )
}

export default FeaturesPage
