export interface IFeatures {
  smallImage?: React.ReactFragment
  fullSizeImage?: React.ReactFragment
  content: string
  title: string
  tabName: string
}

export type IActiveCard = Pick<IFeatures, 'smallImage' | 'fullSizeImage'>

export type ITab = Pick<IFeatures, 'tabName'>

export type IContentCard = Pick<IFeatures, 'content' | 'title'>
