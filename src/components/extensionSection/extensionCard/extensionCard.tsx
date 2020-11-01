import * as React from 'react'
import './extensionCard.scss'
import DotsIcon from 'icons/dots'
import { PrimaryButton } from 'components/baseComponents'
import { IExtensionProps } from 'model'

const ExtensionCard = ({ browserIcon, browserName, browserVersion }: IExtensionProps) => {
  return (
    <div className="extensionCard">
      {browserIcon}
      <h3 className="extensionCard__browser-name">Add to {browserName}</h3>
      <p className="extensionCard__browser-version">Minimum version {browserVersion}</p>
      <DotsIcon className="extensionCard__divider" />
      <PrimaryButton text="Add & install Extension" variant="primary" />
    </div>
  )
}

export default ExtensionCard
