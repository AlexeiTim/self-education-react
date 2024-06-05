export class LocalStorage<T> {
  key: string
  constructor(key: string) {
    this.key = key
  }

  get(): T | null {
    const data = localStorage.getItem(this.key)

    if (data) return JSON.parse(data)
    else return null
  }

  update(value: Partial<T>) {
    const params: Partial<T> = this.get() ?? {}

    localStorage.removeItem(this.key)
    this.set({
      ...params,
      ...value,
    })
  }

  set(value: T | Partial<T>) {
    localStorage.removeItem(this.key)
    localStorage.setItem(this.key, JSON.stringify(value))
  }

  delete() {
    localStorage.removeItem(this.key)
  }
}
