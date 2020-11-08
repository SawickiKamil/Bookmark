export const validateEmail = (value: string) => {
  // mail validation - usually i'll go for Formik - 3rd party libs but in this project I don't really wanna use them though.
  // eslint-disable-next-line
  const mailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return mailValidation.test(String(value).toLowerCase())
}
