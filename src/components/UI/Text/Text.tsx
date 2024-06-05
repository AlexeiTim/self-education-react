import React, { ReactNode } from "react"

export class Text extends React.Component<React.PropsWithChildren> {
  render(): ReactNode {
    return <span>{this.props.children}</span>
  }
}
