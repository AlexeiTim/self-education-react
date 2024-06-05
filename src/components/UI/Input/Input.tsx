import React from "react"
import styles from "./Input.module.css"

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export class Input extends React.Component<Props> {
  render(): React.ReactNode {
    return <input {...this.props} className={styles.input} />
  }
}
