import { makeRequest } from "@/lib/makeRequest"
import { BaseResponse, TableData } from "@/types/api"
import { PeopleParams } from "@/types/people/params"
import { PeopleListResponse } from "@/types/people/list-response"

const BASE_URL = "/people"

class PeopleService {
  getAll(params?: PeopleParams): Promise<BaseResponse<TableData<PeopleListResponse>>> {
    return makeRequest({ url: BASE_URL, params })
  }
}

export const peopleService = new PeopleService()
