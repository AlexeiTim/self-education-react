export const clearEmptyParams = (params: object) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.fromEntries(Object.entries(params).filter(([_, value]) => !!value))
}
