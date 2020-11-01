import * as React from 'react'
import { IFaqProps } from 'model'
import './faqElement.scss'

interface IFaqElementProps {
  faq: IFaqProps
  index: number
  toggleFAQ: (index: number) => void
}

const FaqElement = ({ faq, index, toggleFAQ }: IFaqElementProps) => {
  const handleClick = React.useCallback(() => {
    toggleFAQ(index)
  }, [toggleFAQ, index])

  return (
    <div className={!faq.isOpen ? 'faq-element' : 'faq-element-active'} key={index} onClick={handleClick}>
      <div className={!faq.isOpen ? 'faq-element__question' : 'faq-element-active__question-active'}>
        {faq.question}
      </div>
      <div className={!faq.isOpen ? 'faq-element__answer' : 'faq-element-active__answer-active'}>{faq.answer}</div>
    </div>
  )
}

export default FaqElement
