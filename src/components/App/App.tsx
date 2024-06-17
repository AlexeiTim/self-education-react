import { ReactNode, Component } from "react"
import "./App.css"
import { State } from "./types"
import { PeopleSearch } from "../People/Search/PeopleSearch"
import { PeopleList } from "../People/List/PeopleList"
import { AppLayout } from "../Layouts/AppLayout"
import { peopleParamsStorage } from "@/services/local-storage/people/people-params"
import { peopleService } from "@/services/api/peoples-service"
import { Loader } from "../UI"

export class App extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props)
    this.state = {
      loading: false,
      peoples: [],
    }
  }

  componentDidMount(): void {
    this.loadData()
  }

  loadData = async () => {
    const params = peopleParamsStorage.get() ?? {}
    this.setState({ loading: true })

    const { data } = await peopleService.getAll(params)

    this.setState({ peoples: data.results })
    this.setState({ loading: false })
  }

  render(): ReactNode {
    if (this.state.loading) return <Loader />

    return (
      <AppLayout>
        <AppLayout.Header>
          <PeopleSearch loadData={this.loadData} />
        </AppLayout.Header>

        <AppLayout.Main>
          <PeopleList peoples={this.state.peoples} />
        </AppLayout.Main>
      </AppLayout>
    )
  }
}

export default App
