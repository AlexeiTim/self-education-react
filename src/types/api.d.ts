export interface TableData<T> {
  count: number
  prev: string
  next: string
  results: T[]
}

export interface BaseResponse<T> {
  data: T
}
