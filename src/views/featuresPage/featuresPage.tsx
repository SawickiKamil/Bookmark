import * as React from 'react'
import ContactUsSection from 'components/contactUsSection'
import FaqSection from 'components/faqSection'
import ExtensionSection from 'components/extensionSection/extensionSection'
import ServicesSection from 'components/featureSection'
import HeroSection from 'components/heroSection'

const FeaturesPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ExtensionSection />
      <FaqSection />
      <ContactUsSection />
    </>
  )
}

export default FeaturesPage
