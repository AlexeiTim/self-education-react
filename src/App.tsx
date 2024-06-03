import { ReactNode, Component, ChangeEvent } from "react"
import "./App.css"

export class App extends Component<object, { search: string }> {
  constructor(props: object) {
    super(props)
    this.state = {
      search: "",
    }

    this.handleChangeSearch = this.handleChangeSearch.bind(this)
  }

  handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ search: e.target.value })
  }

  render(): ReactNode {
    return (
      <div>
        <section>
          <div>
            <input
              type="text"
              value={this.state.search}
              onInput={this.handleChangeSearch}
            />
            <button>Поиск</button>
          </div>
        </section>
        <section>
          <div>Список</div>
        </section>
      </div>
    )
  }
}

export default App
