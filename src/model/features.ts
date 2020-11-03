export interface IFeatures {
  // image: React.ReactFragment
  smallImage?: React.ReactFragment
  fullSizeImage?: React.ReactFragment
  content: string
  title: string
  tabName: string
  className?: string
}

export type IActiveCard = Pick<IFeatures, 'smallImage' | 'fullSizeImage' | 'className'>

export type ITab = Pick<IFeatures, 'tabName'>

export type IContentCard = Pick<IFeatures, 'content' | 'title' | 'className'>
