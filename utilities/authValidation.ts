const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validateEmail = (email: string) => {
  const invalidEmail = regex.test(email)

  return invalidEmail
}

export const validatePasswordMatch = (
  passwordOne: string,
  passwordTwo: string
): boolean => {
  if (passwordOne !== passwordTwo) {
    return false
  }
  return true
}

export const validatePasswordLength = (password: string): boolean => {
  if (password.length < 5) {
    return false
  }
  return true
}
