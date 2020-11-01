import * as React from 'react'
import './faqSection.scss'
import { BaseSection, PrimaryButton } from 'components/baseComponents'
import FaqElement from './faqElement'
import { useFAQ } from './useFaq'

const title = 'Frequents Asked Questions'
const content =
  "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us"

const FaqSection: React.FC = () => {
  const { faqs, toggleFAQ } = useFAQ()

  return (
    <BaseSection title={title} content={content}>
      <div className="faq-section">
        {faqs.map((faq, i) => (
          <FaqElement key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <PrimaryButton text="More Info" variant="primary" className="button-styles" />
    </BaseSection>
  )
}

export default FaqSection
