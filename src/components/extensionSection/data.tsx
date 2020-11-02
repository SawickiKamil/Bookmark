import { IExtensionProps } from 'model'
import Chrome from 'icons/logo/chrome'
import Firefox from 'icons/logo/firefox'
import Opera from 'icons/logo/opera'
import React from 'react'

const randomNumberChrome = Math.floor(Math.random() * 100 + 1)
const randomNumberFirefox = Math.floor(Math.random() * 100 + 1)
const randomNumberOpera = Math.floor(Math.random() * 100 + 1)

export const extensionData: IExtensionProps[] = [
  {
    browserIcon: <Chrome />,
    browserName: 'Chrome',
    browserVersion: randomNumberChrome,
    navigateTo: 'https://www.google.com/chrome',
  },
  {
    browserIcon: <Firefox />,
    browserName: 'Firefox',
    browserVersion: randomNumberFirefox,
    navigateTo: 'https://www.mozilla.org/pl/firefox',
  },
  {
    browserIcon: <Opera />,
    browserName: 'Opera',
    browserVersion: randomNumberOpera,
    navigateTo: 'https://www.opera.com/pl',
  },
]
