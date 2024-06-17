import React from "react"
import styles from "./Card.module.css"
import { Props } from "./types"

export class Card extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className={styles.root} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
