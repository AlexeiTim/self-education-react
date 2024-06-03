import { LocalStorage } from "./base"

export const PeopleParamsKey = "PeopleParamsStorage"

export class PeopleParamsStorage extends LocalStorage {
  constructor(key: string) {
    super(key)
  }
}

export const peopleParamsStorage = new PeopleParamsStorage(PeopleParamsKey)
