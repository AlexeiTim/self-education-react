import { ReactNode, Component, ChangeEvent } from "react"
import "./App.css"
import { getPeoples } from "./services/api/peoples-service"
import { People } from "./types/people"
import { peopleParamsStorage } from "./services/local-storage/people-params"

interface State {
  search: string
  loading: boolean
  peoples: People[]
}
export class App extends Component<object, State> {
  constructor(props: object) {
    super(props)
    this.state = {
      search: "",
      loading: false,
      peoples: [],
    }
  }

  componentDidMount(): void {
    const params = peopleParamsStorage.get()
    if (params?.search) {
      this.setState({ search: params.search })
      this.loadData(params)
    }
  }

  loadData = async (params: { search?: string }) => {
    this.setState({ loading: true })

    const data = await getPeoples(params)

    this.setState({ peoples: data.results })
    this.setState({ loading: false })
  }

  handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value })
  }

  handleClickSearch = () => {
    const search = this.state.search
    peopleParamsStorage.set({ search })
    this.loadData({ search })
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
            <button onClick={this.handleClickSearch}>Поиск</button>
          </div>
        </section>
        <section>
          {this.state.loading ? (
            <div>Загузка</div>
          ) : (
            <>
              {this.state.peoples.map((p, index) => (
                <div key={index}>{p.birth_year}</div>
              ))}
            </>
          )}
        </section>
      </div>
    )
  }
}

export default App
