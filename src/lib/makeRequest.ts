import { generateSearchParams } from "./generateSearchParams"

interface Request {
  url: string
  method?: string
  params?: object
}

export const makeRequest = async ({ url, params }: Request) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}${url}${generateSearchParams(params)}`,
  )
  const data = await response.json()
  return data
}
