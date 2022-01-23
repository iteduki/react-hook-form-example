import React from 'react'
import { TextInput, TextInputProps } from '../Input/TextInput'
import { FieldValues } from 'react-hook-form'

interface TextInputWithLabelProps<T> extends Omit<TextInputProps<T>, 'title'> {
  title: string
}

export const TextInputWithLabel = <T extends FieldValues = never>(
  props: TextInputWithLabelProps<T>
): ReturnType<React.VFC> => {
  return (
    <>
      <div>{<label>{props.title}</label>}</div>
      <TextInput {...props} />
    </>
  )
}
