import React from 'react'
import { FieldByType } from '../FieldByType'
import { useFormContext, FieldValues, Controller } from 'react-hook-form'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerProps<T>
  extends Omit<ReactDatePickerProps, 'onChange' | 'selected'> {
  name: FieldByType<T, string>
  onChange?: (
    e: Date | null,
    event: React.SyntheticEvent<unknown, Event> | undefined
  ) => void
}

export const DatePicker = <T extends FieldValues = never>({
  name,
  onChange,
  ...props
}: DatePickerProps<T>): ReturnType<React.VFC> => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ReactDatePicker
          onChange={(e, event) => {
            if (onChange) onChange(e, event)
            field.onChange(e)
          }}
          selected={field.value}
          {...props}
        />
      )}
    />
  )
}
