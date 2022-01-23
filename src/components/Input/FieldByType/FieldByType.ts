import { Path, FieldPathValue } from 'react-hook-form'

export type FieldByType<T, U> = {
  [P in Path<T>]: FieldPathValue<T, P> extends U ? P : never
}[Path<T>]
