import * as React from 'react'
import { validateEmail } from 'utils'

export const useContact = () => {
  const [countingNumber, setCountingNumber] = React.useState(35000)
  const [value, setValue] = React.useState('')
  const [alert, setAlert] = React.useState(true)

  const subtractedNumber = 100

  const handleValue = React.useCallback(
    (value: string) => {
      setValue(value)
    },
    [setValue]
  )

  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (countingNumber > 0) setCountingNumber((prev) => prev - subtractedNumber)
    }, 55)

    return () => {
      clearInterval(interval)
    }
  }, [countingNumber])

  const handleClick = React.useCallback(() => {
    if (validateEmail(value)) {
      setAlert(true)
    } else {
      setAlert(false)
    }
  }, [setAlert, value])

  return { countingNumber, value, handleValue, handleClick, alert }
}
