import React from 'react'
import { useFormContext, FieldValues } from 'react-hook-form'
import { FieldByType } from '../FieldByType'

interface TextInputProps<T> {
  name: FieldByType<T, number>
}

export const NumberInput = <T extends FieldValues = never>({
  name
}: TextInputProps<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext()
  return <input type="number" {...register(name, { valueAsNumber: true })} />
}
