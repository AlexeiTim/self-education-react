import React, { ReactNode } from "react"
import { Flex } from "../UI"

export class AppLayout extends React.Component<React.PropsWithChildren> {
  constructor(props: React.PropsWithChildren) {
    super(props)
  }
  static Header = (props: React.PropsWithChildren) => (
    <div style={{ width: "100%", padding: "10px 0" }}>{props.children}</div>
  )

  static Main = (props: React.PropsWithChildren) => <div style={{ flexGrow: 1 }}>{props.children}</div>

  static Footer = (props: React.PropsWithChildren) => <div>{props.children}</div>

  render(): ReactNode {
    return (
      <Flex
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        {React.Children.map(this.props.children, (child) => child)}
      </Flex>
    )
  }
}
