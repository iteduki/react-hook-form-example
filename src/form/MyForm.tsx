import React from 'react'
import { DateAndTime, dateAndTimeSchema } from "../components/DateAndTime"
import { UserName, userNameSchema  } from "../components/UserName"
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'

const schema = Yup.object().shape(
  {
    ...dateAndTimeSchema,
    ...userNameSchema
  }
)
type FormSchemaType = Yup.InferType<typeof schema>

export const MyForm: React.VFC = ( ) => {
  const methods = useForm<FormSchemaType>({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  })
  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data)
    alert(JSON.stringify(data))
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <DateAndTime />
        <UserName />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}