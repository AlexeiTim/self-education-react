export class LocalStorage {
  key: string
  constructor(key: string) {
    this.key = key
  }

  get() {
    const data = localStorage.getItem(this.key)
    if (data) return JSON.parse(data)
    else return data
  }

  set(value: { search: string }) {
    localStorage.setItem(this.key, JSON.stringify(value))
  }
}
