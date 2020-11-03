import * as React from 'react'
import { BaseSection, PrimaryButton } from 'components/baseComponents'
import './buildSection.scss'
import { useHistory } from 'react-router-dom'

interface IConstruction {
  name: string
}

const BuildSection = ({ name }: IConstruction) => {
  let history = useHistory()

  const handleClick = React.useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <BaseSection className="build-section">
      <h1>{name} page is coming soon ...</h1>
      <p>Dorp us a message on Features Page.</p>
      <p>We will notify you soon!</p>
      <PrimaryButton className="buttons" text="Navigate To Main Page" variant="primary" onClick={handleClick} />
    </BaseSection>
  )
}

export default BuildSection
