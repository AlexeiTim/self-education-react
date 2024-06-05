import { PeopleParams } from "@/types/people/params"
import { LocalStorage } from "../base"

export const PeopleParamsKey = "PeopleParamsStorage"

export class PeopleParamsStorage<T> extends LocalStorage<T> {
  constructor(key: string) {
    super(key)
  }
}

export const peopleParamsStorage = new PeopleParamsStorage<Partial<PeopleParams>>(PeopleParamsKey)
