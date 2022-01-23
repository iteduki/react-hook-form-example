import { FieldByType } from '../FieldByType'
import React, { HTMLAttributes } from 'react'
import { useFormContext, FieldValues } from 'react-hook-form'

export interface SelectProps<T>
  extends Omit<HTMLAttributes<HTMLSelectElement>, 'name'> {
  name: FieldByType<T, string> | FieldByType<T, string | undefined>
  values: { label: string; value: string }[]
  defaultOption?: string
}

export const Select = <T extends FieldValues = never>({
  name,
  defaultOption,
  defaultValue,
  values,
  ...props
}: SelectProps<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext()

  return (
    <select {...register(name)} {...props} defaultValue={defaultValue || ''}>
      {!!defaultOption && (
        <option disabled value="">
          {defaultOption}
        </option>
      )}
      {values.map(({ label, value }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
