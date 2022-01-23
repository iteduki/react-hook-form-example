import React from 'react'
import { useFormState, FieldValues, Path } from 'react-hook-form'
import { ErrorMessage as RHFErrorMessage } from '@hookform/error-message'

interface ErrorMessageProps<T> {
  name: Path<T>
}

export const ErrorMessage = <T extends FieldValues = never>({
  name
}: ErrorMessageProps<T>): ReturnType<React.VFC> => {
  const { errors } = useFormState()
  return (
    <RHFErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p>{message}</p>}
    />
  )
}
