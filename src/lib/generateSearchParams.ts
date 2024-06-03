export const generateSearchParams = (params?: object): string => {
  if (!params) return ""
  if (Object.keys(params).length)
    return `?${new URLSearchParams(Object.entries(params).filter((arr) => !!arr[1])).toString()}`
  else return ""
}
