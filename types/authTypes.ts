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
    }: {
      auth: AuthType
      mutate: any
      validateInputs: (auth: AuthType) => string | null
    },
    event: FormEvent<EventTarget>
  ) => void
  errorMessage: string
  auth: AuthType
}
