import { Button, Input } from "@/components/UI"
import { peopleParamsStorage } from "@/services/local-storage/people/people-params"
import React, { ChangeEvent } from "react"
import { Props, State } from "./types"

export class PeopleSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      search: "",
    }
  }

  componentDidMount(): void {
    const params = peopleParamsStorage.get()
    if (!params || !params?.search) return

    this.setState({ search: params.search })
  }

  handleUpdatePeopleParamsStorage = () => {
    peopleParamsStorage.update({ search: this.state.search })
    this.props.loadData()
  }

  render(): React.ReactNode {
    return (
      <div>
        <Input
          placeholder="Search..."
          type="text"
          value={this.state.search}
          onInput={(e: ChangeEvent<HTMLInputElement>) => this.setState({ search: e.target.value })}
        />
        <Button onClick={this.handleUpdatePeopleParamsStorage}>Search</Button>
      </div>
    )
  }
}
