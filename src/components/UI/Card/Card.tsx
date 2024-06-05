import React from "react"

export class Card extends React.Component<React.PropsWithChildren> {
  render(): React.ReactNode {
    return <div>{this.props.children}</div>
  }
}
