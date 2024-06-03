import { makeRequest } from "../../lib/makeRequest"
import { TableData } from "../../types/api"
import { People } from "../../types/people"

const BASE_URL = "/people"

export const getPeoples = (params?: {
  search?: string
}): Promise<TableData<People>> => makeRequest({ url: BASE_URL, params })
