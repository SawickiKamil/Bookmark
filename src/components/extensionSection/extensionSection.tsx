import * as React from 'react'
import './extensionSection.scss'
import { BaseSection } from 'components/baseComponents'
import ExtensionCard from './extensionCard'
import { extensionData } from './data'

const title = 'Download the extension'
const content = `We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.`

const ExtensionSection: React.FC = () => {
  return (
    <BaseSection content={content} title={title}>
      <div className="extensionSection">
        {extensionData.map((element) => (
          <ExtensionCard key={element.browserName} {...element} />
        ))}
      </div>
    </BaseSection>
  )
}

export default ExtensionSection
