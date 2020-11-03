import * as React from 'react'

export const useContact = () => {
  const [countingNumber, setCountingNumber] = React.useState(35000)
  const [value, setValue] = React.useState('')
  const [alert, setAlert] = React.useState(true)

  const subtractedNumber = 100

  const handleValue = React.useCallback(
    (value) => {
      setValue(value)
    },
    [setValue]
  )

  //
  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (countingNumber > 0) setCountingNumber((prev) => prev - subtractedNumber)
    }, 55)

    return () => {
      clearInterval(interval)
    }
  }, [countingNumber])

  const validateEmail = React.useCallback((value: string) => {
    // mail validation - usually i'll go for Formik - 3rd party libs but in this project I don't really wanna use them though.
    // eslint-disable-next-line
    const mailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return mailValidation.test(String(value).toLowerCase())
  }, [])

  const handleClick = React.useCallback(() => {
    if (validateEmail(value)) {
      setAlert(true)
    } else {
      setAlert(false)
    }
  }, [setAlert, validateEmail, value])

  return { countingNumber, value, handleValue, handleClick, alert }
}
