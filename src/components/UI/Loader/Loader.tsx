import React from "react"
import styles from "./Loader.module.css"

export class Loader extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.root}>
        <div className={styles.spinner} />
      </div>
    )
  }
}
