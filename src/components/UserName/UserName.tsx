import React, { useEffect } from 'react'
import { useKana } from 'react-use-kana'
import { useFormContext } from 'react-hook-form'
import { TextInputWithLabel } from '../TextInputWithLabel'
import { ErrorMessage } from '../Input/ErrorMessage'
import * as Yup from 'yup'

export const userNameSchema = {
  name: Yup.string()
    .trim()
    .required('名前を入力してください'),
  kana: Yup.string()
    .trim()
    .required('ふりがなを入力してください'),
}

const yupObject = Yup.object(userNameSchema)
type UserNameFormValues = Yup.InferType<typeof yupObject>

export const UserName: React.VFC = () => {
  const { kana, setKanaSource } = useKana()
  const { setValue } = useFormContext<UserNameFormValues>()

  useEffect(() => {
    setValue('kana', kana)
  }, [setValue, kana])

  return (
    <div>
      <div>
        <TextInputWithLabel<UserNameFormValues>
          name="name"
          title="名前"
          placeholder="田中太郎"
          onChange={(e) => setKanaSource(e.target.value)}
        />
        <ErrorMessage<UserNameFormValues> name="name" />
        <TextInputWithLabel<UserNameFormValues>
          name="kana"
          title="ふりがな"
          placeholder="たなかたろう"
          onChange={(e) => {
            setKanaSource(e.target.value)
          }}
        />
        <ErrorMessage<UserNameFormValues> name="kana" />
      </div>
    </div>
  )
}
