import React, { ReactNode } from "react"
import styles from "./Flex.module.css"

interface Props {
  children: ReactNode
  style?: React.CSSProperties
  gap?: number
  align?: "center" | "start" | "end"
  justify?: "start" | "end" | "center" | "around" | "between"
  basis?: string
  wrap?: "nowrap" | "wrap"
}
export class Flex extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div
        className={styles.root}
        style={{
          gap: this.props.gap ? this.props.gap + "px" : "0px",
          alignItems: this.props.align || "start",
          justifyContent: this.props.justify || "start",
          flexBasis: this.props.basis || "",
          flexWrap: this.props.wrap || "wrap",
        }}
        {...this.props}
      >
        {this.props.children}
      </div>
    )
  }
}
