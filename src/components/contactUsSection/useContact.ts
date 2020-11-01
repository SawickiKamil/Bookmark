import * as React from 'react'

export const useContact = () => {
  const [amountOfDevelopers, setAmountOfDevelopers] = React.useState(35000)
  const [value, setValue] = React.useState('')
  const [alert, setAlert] = React.useState(true)

  const handleValue = React.useCallback(
    (value) => {
      setValue(value)
    },
    [setValue]
  )

  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (amountOfDevelopers > 0) setAmountOfDevelopers((prev) => prev - 100)
    }, 55)

    return () => {
      clearInterval(interval)
    }
  }, [amountOfDevelopers])

  const validateEmail = React.useCallback((value: string) => {
    // mail validation - usually i'll go for Formik - 3rd party libs but in this project I don't really wanna use them though.
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }, [])

  const handleClick = React.useCallback(() => {
    if (validateEmail(value)) {
      setAlert(true)
    } else {
      setAlert(false)
    }
  }, [setAlert, validateEmail, value])

  return { amountOfDevelopers, value, handleValue, handleClick, alert }
}
