import * as React from 'react'
import ContactUsSection from 'components/contactUsSection'
import FaqSection from 'components/faqSection'
import ExtensionSection from 'components/extensionSection/extensionSection'
import ServicesSection from 'components/featureSection'
import HeroSection from 'components/heroSection'
import { PageWrapper } from 'components/baseComponents'

const FeaturesPage: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <ServicesSection />
      <ExtensionSection />
      <FaqSection />
      <ContactUsSection />
    </PageWrapper>
  )
}

export default FeaturesPage
