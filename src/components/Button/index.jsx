import { Component } from "react"
import './style.css'

export class Button extends Component {
    render(){
        const {text, click, disabled} = this.props
        return(
            <button className="btn" onClick={click} disabled={disabled}>
                {text}
            </button>
        )
    }
}