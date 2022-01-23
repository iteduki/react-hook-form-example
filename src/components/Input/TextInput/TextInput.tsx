import React, { InputHTMLAttributes } from 'react'
import { useFormContext, FieldValues } from 'react-hook-form'
import { FieldByType } from '../FieldByType'

export interface TextInputProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: FieldByType<T, string>
}

export const TextInput = <T extends FieldValues = never>({
  name,
  ...props
}: TextInputProps<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext()

  return <input type="text" {...register(name)} {...props} />
}
