import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
  style: {
    [key: string]: string | number
  }
}
export class Flex extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): React.ReactNode {
    return <div {...this.props}>{this.props.children}</div>
  }
}
