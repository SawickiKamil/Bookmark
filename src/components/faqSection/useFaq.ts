import * as React from 'react'
import { faqData } from './data'
import { IFaqProps } from 'model'

export const useFAQ = () => {
  const [faqs, setFaqs] = React.useState<IFaqProps[]>(faqData)

  const toggleFAQ = React.useCallback(
    (index: number) => {
      setFaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            faq.isOpen = !faq.isOpen
          } else {
            faq.isOpen = false
          }
          return faq
        })
      )
    },

    [setFaqs, faqs]
  )

  return { faqs, toggleFAQ }
}
