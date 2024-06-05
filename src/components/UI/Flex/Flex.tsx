import React from "react"

export class Flex extends React.Component<React.PropsWithChildren> {
  render(): React.ReactNode {
    return <div {...this.props}>{this.props.children}</div>
  }
}
