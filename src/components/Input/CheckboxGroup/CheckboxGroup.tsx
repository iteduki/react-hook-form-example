import React, { InputHTMLAttributes } from 'react'
import { useFormContext, FieldValues } from 'react-hook-form'
import { FieldByType } from '../FieldByType'

export interface CheckboxGroupProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'value'> {
  name: FieldByType<T, string[]>
  value: string
}

export const CheckboxGroup = <T extends FieldValues = never>({
  name,
  ...props
}: CheckboxGroupProps<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext()

  return <input type="checkbox" {...register(name)} {...props} />
}
