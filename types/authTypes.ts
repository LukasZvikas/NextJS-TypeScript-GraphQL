import { ChangeEvent, FormEvent } from 'react'

export interface AuthType {
  email?: string
  password?: string
  passwordConfirm?: string
}

export interface InjectedProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (
    {
      auth,
      mutate,
      validateInputs,
      setErrorMessage,
    }: {
      auth: AuthType
      mutate: any
      validateInputs: (auth: AuthType) => string | null
      setErrorMessage: (message: string) => void
    },
    event: FormEvent<EventTarget>
  ) => void
  errorMessage: string
  auth: AuthType
  setErrorMessage: (message: string) => void
}
