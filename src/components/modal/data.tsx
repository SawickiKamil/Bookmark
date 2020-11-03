import { IFeatures } from 'model'
import BookmarkPhoto from 'images/illustration1'
import BookmarkPhotoSmall from 'images/illustration1Small'
import SpeedySearch from 'images/illustration2'
import SpeedySearchSmall from 'images/illustration2Small'
import EasyShare from 'images/illustration3'
import EasyShareSmall from 'images/illustration3Small'
import React from 'react'

export const ModalData: IFeatures[] = [
  {
    fullSizeImage: <BookmarkPhoto />,
    smallImage: <BookmarkPhotoSmall />,
    tabName: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    content: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.`,
  },
  {
    fullSizeImage: <SpeedySearch />,
    smallImage: <SpeedySearchSmall />,
    tabName: 'Speedy Search',
    title: 'Intelligent search',
    content:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    fullSizeImage: <EasyShare />,
    smallImage: <EasyShareSmall />,
    tabName: 'Easy Sharing',
    title: 'Share your bookmarks',
    content:
      'Easily share you bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
]
