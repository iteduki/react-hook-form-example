import React from 'react'
import * as Yup from 'yup'
import { DatePicker } from '../Input/DatePicker'
import { ErrorMessage } from '../Input/ErrorMessage'
import { Select } from '../Input/Select'

const wantTimeTypes = [
  {
    value: 'unresolved',
    label: '未定'
  },
  {
    value: 'am',
    label: '午前'
  },
  {
    value: 'pm',
    label: '午後'
  }
]

export const dateAndTimeSchema = {
  date: Yup.string().required(),
  time: Yup.string().required()
}

const yupObject = Yup.object(dateAndTimeSchema)
type DateAndTimeFormValues = Yup.InferType<typeof yupObject>

export const DateAndTime: React.VFC = () => (
  <>
    <div>
      <label>日付</label>
      <DatePicker<DateAndTimeFormValues> name="date" />
      <ErrorMessage<DateAndTimeFormValues> name="date" />
    </div>
    <div>
      <label>時間帯</label>
      <Select<DateAndTimeFormValues> name="time" values={wantTimeTypes} />
      <ErrorMessage<DateAndTimeFormValues> name="time" />
    </div>
  </>
)
