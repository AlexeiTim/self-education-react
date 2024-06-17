import { Card } from "@/components/UI"
import { Props } from "./types"
import React from "react"

export class PeopleCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { people } = this.props
    return (
      <Card
        style={{
          ...this.props.style,
        }}
      >
        <h1>{people.name}</h1>
        <p>{people.birth_year}</p>
        <p>{people.films}</p>
      </Card>
    )
  }
}
