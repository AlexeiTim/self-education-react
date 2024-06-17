import React from "react"
import { PeopleCard } from "../Card/PeopleCard"
import { Props, State } from "./types"
import { Flex } from "@/components/UI"

export class PeopleList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <Flex gap={10} justify="between">
        {this.props.peoples.map((people) => (
          <PeopleCard style={{ flexBasis: "30%" }} people={people} key={people.name} />
        ))}
      </Flex>
    )
  }
}
