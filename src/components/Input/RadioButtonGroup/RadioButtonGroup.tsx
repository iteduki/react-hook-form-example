import React, { InputHTMLAttributes } from 'react'
import { useFormContext, FieldValues } from 'react-hook-form'
import { FieldByType } from '../FieldByType'

interface RadioButtonGroupProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'value'> {
  name: FieldByType<T, string>
  value: string
}

export const RadioButtonGroup = <T extends FieldValues = never>({
  name,
  ...props
}: RadioButtonGroupProps<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext()

  return <input type="radio" {...register(name)} {...props} />
}
