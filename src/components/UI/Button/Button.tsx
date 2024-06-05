import React, { ReactNode } from "react"

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export class Button extends React.Component<Props> {
  render(): ReactNode {
    return <button {...this.props}>{this.props.children}</button>
  }
}
